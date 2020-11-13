import { Ctx } from "blitz"
import db, { VotesOnRequestCreateArgs, VotesOnRequestCreateManyWithoutRequestInput } from "db"

type VotesOnRequestInput = Pick<VotesOnRequestCreateArgs, "data">

export default async function voteOnRequest({ data }: VotesOnRequestInput, ctx: Ctx) {
  ctx.session.authorize()
  const userId = ctx.session.userId

  const request = await db.votesOnRequest.create({
    data: {
      ...data,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })

  return request
}
