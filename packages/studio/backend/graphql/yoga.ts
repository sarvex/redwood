import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { createYoga, createSchema } from 'graphql-yoga'

import { authProvider, generateAuthHeaders } from '../services/auth'
import { studioConfig, webConfig } from '../services/config'
import { graphQLSpans, graphQLSpanCount } from '../services/graphqlSpans'
import { prismaQuerySpans } from '../services/prismaSpans'
import { traces, trace, traceCount } from '../services/span'
import { sqlSpans, sqlCount } from '../services/sqlSpans'

export const setupYoga = (fastify: FastifyInstance) => {
  const schema = createSchema<{
    req: FastifyRequest
    reply: FastifyReply
  }>({
    typeDefs: /* GraphQL */ `
      type Trace {
        id: String
        spans: [Span]
        enhancements: TraceEnhancements
      }
      type TraceEnhancements {
        features: [String]
        containsError: Boolean
      }
      type Span {
        id: String
        trace: String
        parent: String
        name: String
        kind: Int
        statusCode: Int
        statusMessage: String
        startNano: String
        endNano: String
        durationNano: String
        events: String # JSON
        attributes: String # JSON
        resources: String # JSON
      }

      type PrismaQuerySpan {
        id: String
        trace: String
        parent_id: String
        parent_trace: String
        name: String
        method: String
        model: String
        prisma_name: String
        start_nano: String
        end_nano: String
        duration_nano: String
        duration_ms: String
        duration_sec: String
        db_statement: String
      }

      type GraphQLSpan {
        id: String
        parent: String
        name: String
        field_name: String
        type_name: String
        start_nano: String
        end_nano: String
        duration_nano: String
      }

      type GraphiQLConfig {
        endpoint: String
        authImpersonation: AuthImpersonationConfig
      }

      type AuthImpersonationConfig {
        authProvider: String
        userId: String
        email: String
        roles: [String]
        jwtSecret: String
      }

      type StudioConfig {
        inMemory: Boolean
        graphiql: GraphiQLConfig
      }

      type WebConfig {
        graphqlEndpoint: String
      }

      type AuthHeaders {
        authProvider: String
        cookie: String
        authorization: String
      }

      type Query {
        traces: [Trace]!
        trace(id: String!): Trace
        prismaQueries(id: String!): [PrismaQuerySpan]!
        authProvider: String
        studioConfig: StudioConfig
        webConfig: WebConfig
        generateAuthHeaders(userId: String): AuthHeaders
        sqlSpans: [Span]!
        sqlCount: Int!
        graphQLSpans: [GraphQLSpan]!
        graphQLSpanCount: Int!
        traceCount: Int!
      }
    `,
    resolvers: {
      Query: {
        traces,
        trace,
        studioConfig,
        webConfig,
        authProvider,
        generateAuthHeaders,
        prismaQueries: prismaQuerySpans,
        sqlSpans,
        sqlCount,
        traceCount,
        graphQLSpans,
        graphQLSpanCount,
      },
    },
  })

  const yoga = createYoga<{
    req: FastifyRequest
    reply: FastifyReply
  }>({
    schema,
    logging: {
      debug: (...args) => args.forEach((arg) => fastify.log.debug(arg)),
      info: (...args) => args.forEach((arg) => fastify.log.info(arg)),
      warn: (...args) => args.forEach((arg) => fastify.log.warn(arg)),
      error: (...args) => args.forEach((arg) => fastify.log.error(arg)),
    },
  })

  return yoga
}
