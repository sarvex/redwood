import React, { useState } from 'react'

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const numberFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function SpanSegment({
  trace,
  span,
  depth = 0,
  traceStartNano,
  traceEndNano,
}: {
  trace: any
  span: any
  depth?: number
  traceStartNano: string
  traceEndNano: string
}) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [showDetails, setShowDetails] = useState(false)

  const traceStart = BigInt.asUintN(63, BigInt(traceStartNano))
  const traceEnd = BigInt.asUintN(63, BigInt(traceEndNano))
  const traceDuration = Number(traceEnd - traceStart)

  const spanStart = BigInt.asUintN(63, BigInt(span.startNano))
  const spanEnd = BigInt.asUintN(63, BigInt(span.endNano))

  const startBasis = (Number(spanStart - traceStart) / traceDuration) * 99.999
  const duringBasis = (Number(spanEnd - spanStart) / traceDuration) * 99.999
  const endBasis = (Number(traceEnd - spanEnd) / traceDuration) * 99.999

  const durationText = `${numberFormatter.format(
    Number(spanEnd - spanStart) / 1_000_000
  )}ms`
  const durationTextAtEnd = endBasis > 0.2
  const durationTextAtDuring = !durationTextAtEnd && duringBasis > 0.2
  const durationTextAtStart = !durationTextAtEnd && !durationTextAtDuring

  const children = trace.spans
    .filter((child: any) => child.parent === span.id)
    .sort((a: any, b: any) =>
      a.startNano > b.startNano ? 1 : b.startNano > a.startNano ? -1 : 0
    )

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row bg-slate-50 py-2 px-1 rounded-md shadow-sm">
        <div
          className="basis-2/5 flex flex-row gap-2"
          style={{ paddingLeft: depth * 16 + (children.length > 0 ? -2 : 26) }}
        >
          {children.length > 0 && (
            <button
              className="text-left"
              onClick={() => setIsExpanded(!isExpanded)}
              disabled={children.length === 0}
            >
              {isExpanded ? (
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          )}
          <button
            className="text-left"
            onClick={() => setShowDetails(!showDetails)}
          >
            {span.name}
          </button>
        </div>
        <div className="basis-3/5">
          <div className="px-2 flex flex-row w-full min-w-full">
            <div
              style={{
                flexBasis: `${startBasis.toFixed(3)}%`,
                paddingRight: '0.5rem',
              }}
            >
              {durationTextAtStart ? durationText : '⠀'}
            </div>
            <div
              className="bg-gradient-to-r from-slate-600 to-slate-400 rounded-md pl-2 text-white text-md shadow-md"
              style={{
                flexBasis: `${duringBasis.toFixed(3)}%`,
              }}
            >
              {durationTextAtDuring ? durationText : '⠀'}
            </div>
            <div
              className="ml-2 text-md text-slate-400"
              style={{
                flexBasis: `${endBasis.toFixed(3)}%`,
              }}
            >
              {durationTextAtEnd ? durationText : '⠀'}
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="flex flex-col gap-1 bg-slate-50 mx-6 border border-neutral-400 p-2 rounded-md shadow-md">
          <details>
            <summary>Attributes</summary>
            <div className="flex flex-col gap-1">
              {Object.entries(JSON.parse(span.attributes)).map(
                ([key, value]) => {
                  return (
                    <div key={key} className="flex flex-row gap-2">
                      <div className="font-bold">{key}</div>
                      <div className="grow">{JSON.stringify(value)}</div>
                    </div>
                  )
                }
              )}
            </div>
          </details>
          <details>
            <summary>Events</summary>
            <div className="flex flex-col gap-1">
              {Object.entries(JSON.parse(span.events)).map(([key, value]) => {
                return (
                  <div key={key} className="flex flex-row gap-2">
                    <div className="font-bold">{key}</div>
                    <div className="grow">{JSON.stringify(value)}</div>
                  </div>
                )
              })}
            </div>
          </details>
          <details>
            <summary>Resources</summary>
            <div className="flex flex-col gap-1">
              {Object.entries(JSON.parse(span.resources)).map(
                ([key, value]) => {
                  return (
                    <div key={key} className="flex flex-row gap-2">
                      <div className="font-bold">{key}</div>
                      <div className="grow">{JSON.stringify(value)}</div>
                    </div>
                  )
                }
              )}
            </div>
          </details>
        </div>
      )}
      {isExpanded && (
        <div>
          {children.map((child: any) => (
            <SpanSegment
              key={child.id}
              trace={trace}
              span={child}
              depth={depth + 1}
              traceStartNano={traceStartNano}
              traceEndNano={traceEndNano}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function TimelineView({ trace }: { trace: any }) {
  const rootSpans = trace.spans
    .filter((span: any) => span.parent == null)
    .sort((a: any, b: any) =>
      a.startNano > b.startNano ? 1 : b.startNano > a.startNano ? -1 : 0
    )

  const traceStartNano = trace.spans
    .map((span: any) => span.startNano)
    .sort((a: any, b: any) => (a > b ? 1 : b > a ? -1 : 0))[0]

  const traceEndNano = trace.spans
    .map((span: any) => span.endNano)
    .sort((a: any, b: any) => (a > b ? -1 : b > a ? 1 : 0))[0]

  return (
    <div className="flex flex-col gap-1">
      {rootSpans.map((span: any) => (
        <SpanSegment
          key={span.id}
          trace={trace}
          span={span}
          traceStartNano={traceStartNano}
          traceEndNano={traceEndNano}
        />
      ))}
    </div>
  )
}

export default TimelineView
