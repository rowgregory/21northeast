'use server'

import { prisma } from '@/prisma/client'
import { Prisma } from '@prisma/client'

export type LogAction =
  | 'CONTACT_FORM_SUBMITTED'
  | 'USER_LOGIN'
  | 'USER_LOGIN_DENIED'
  | 'USER_CREATED'
  | 'USER_DELETED'
  | 'SUBMISSION_STATUS_CHANGED'
  | 'SUBMISSION_DELETED'
  | 'CRON_SYNC_EILEEN_LISTINGS'

type LogMetadata = Record<string, string | number | boolean | null | undefined>

interface CreateLogParams {
  action: LogAction
  message: string
  entity?: string
  entityId?: string
  metadata?: LogMetadata | null
  ipAddress?: string
  userAgent?: string
}

export async function createLog({
  action,
  message,
  entity,
  entityId,
  metadata,
  ipAddress,
  userAgent
}: CreateLogParams): Promise<void> {
  try {
    await prisma.log.create({
      data: {
        action,
        message,
        entity: entity ?? null,
        entityId: entityId ?? null,
        metadata: metadata ?? Prisma.JsonNull,
        ipAddress: ipAddress ?? null,
        userAgent: userAgent ?? null
      }
    })
  } catch {
    // Logs should never break the main flow
  }
}
