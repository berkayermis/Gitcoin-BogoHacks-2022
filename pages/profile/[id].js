import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';

const Profile = ({ id }) => {
    const router = useRouter();
    const [userSub, setUserSub] = useState(null);

    useEffect(() => {
        const data = router.query.sub;
        setUserSub(data);
    }, [])
    
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            
<div className=" mx-auto mt-20 mb-20 p-40 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <img className="mb-3 rounded-full shadow-lg" src={"https://random.imagecdn.app/300/300"} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userSub ? (
            <p>{userSub}</p>
        ) : (
            <p>Loading...</p>
        )}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{id ? (
            <p>{id}</p>
        )
        : (
            <p>Loading...</p>
        )}
        </span>
    </div>
</div>

        </>
    
    );
  }
  
  export default Profile;

  export async function getServerSideProps(context) {
    const { id } = context.query;
    return {
      props: {
        id,
      },
    };
  }