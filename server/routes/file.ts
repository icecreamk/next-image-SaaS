import z from 'zod'
import { router, protectedProcedure } from '../trpc'

import { TRPCError } from '@trpc/server'
import { PutObjectAclCommand, PutObjectAclCommandInput, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'


const bucket = 'image-1344714885'
const apiEnxpoint = 'https://image-1344714885.cos.ap-guangzhou.myqcloud.com'
const region = 'ap-guangdong'




export const filetRoutes = router({
    createPresigneUrl: protectedProcedure
        .input(
            z.object({
                filename: z.string(),
                contentType: z.string(),
                size: z.number(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const date = new Date()
            const isoString = date.toISOString()
            const dateString = isoString.split('T')[0]
            const params: PutObjectAclCommandInput = {
                Bucket: bucket,
                Key: `${dateString}/${input.filename.replaceAll(" ", '_')}`,
            }

            const s3Client = new S3Client({
                endpoint: apiEnxpoint,
                region,
                credentials: {
                    accessKeyId: SecretId,
                    secretAccessKey: SecretKey,
                }
            })
            const command = new PutObjectCommand(params)
            const url = await getSignedUrl(s3Client, command, {
                expiresIn: 60
            })

            return {
                url,
                method: "PUT" as const
            }
        })


})