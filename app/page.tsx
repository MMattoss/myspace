import { getServerSession } from "next-auth"
import { redirect } from "next/dist/server/api-utils"

export default async function Home() {
	const session = await getServerSession();

	if(!session) {
		return <p>Not signed in...</p>
	}

	return <main>

	</main>
}
