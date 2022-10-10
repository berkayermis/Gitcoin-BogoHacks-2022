import { useAccount } from '../../components/web3/hooks';
import { useWeb3 } from '../../components/web3/providers';
import React, {useEffect, useState} from 'react'

const university = ({ id }) => {
    const { account } = useAccount();
    const { web3, connect, contract } = useWeb3();
    const [university, setUniversity] = useState({
        universityName: "",
        communityName: "",
        totalNumberOfCommunity: "",
        country: "",
        city: "",
        moderatorDomain: "",
        admin:""
    });

    useEffect(() => {
        console.log(contract)
        getUniversity(id);
    }, [contract,id])

    const getUniversity = async (id) => {
        await contract?.methods.getApplication(id).call({ from: account.data }).then((res) => {
            console.log(res);
            setUniversity({
                universityName: res[1],
                communityName: res[5],
                totalNumberOfCommunity: res[7],
                country: res[3],
                city: res[4],
                moderatorDomain: res[6],
                admin: res[0]
            })
        }
        )
    }

    const createPoll = async (e) => {
        e.preventDefault();
        await contract?.methods.createPoll(3600,id,university.universityName,"").send({ from: account.data });
    }


    return (
        <>

<div class="overflow-x-auto relative">
    <table class="w-[50%] mx-auto mt-32 mb-32 text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    University Name
                </th>
                <td class="py-4 px-6">
                    {university.universityName}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Community Name
                </th>
                <td class="py-4 px-6">
                    {university.communityName}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Country
                </th>
                <td class="py-4 px-6">
                    {university.country}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   City
                </th>
                <td class="py-4 px-6">
                    {university.city}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Number of Community
                </th>
                <td class="py-4 px-6">
                    {university.totalNumberOfCommunity}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Admin
                </th>
                <td class="py-4 px-6">
                    {university.admin}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Moderator
                </th>
                <td class="py-4 px-6">
                    {university.moderatorDomain}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Create a new Poll
                </th>
                <td class="py-4 px-6">
                <button
                onClick={(e) => createPoll(e)}
                className="inline-flex items-center text-white bg-[#4d47f8] border-0 py-1 px-3 focus:outline-none hover:opacity-90 rounded text-base mt-4 md:mt-0">
                    Create
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    )
}

export default university;

export async function getServerSideProps(context){
    const { id } = context.query;
    return {
        props: {
            id
        }
    }
}