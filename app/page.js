import { prisma } from "@/lib/db"


export default async function Home() {
  const users = await prisma.user.findMany();
  return(
    <div>
      <h1>HI</h1>
      <pre>{JSON.stringify(users)}</pre>
    </div>
  )
  
}