
import ShowMessage from "../components/Message"

export const metadata = {
    title: 'Users Page',
    description: 'Cool Music School Users Page',
  }


async function fetchRepos() {
    const res = await fetch("https://api.github.com/users/tbabyuk/repos")
    const repos = await res.json()
    return repos
}

const Users = async () => {

    const repos = await fetchRepos()

    return ( 
        <div>
            <ShowMessage />
            {repos && 
                repos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))
            }
        </div>
     );
}


// export async function getStaticProps() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await res.json()

//     console.log(users)

//     return {
//         props: {
//             users
//         }
//     }
// }
 
export default Users;


