import React, {useEffect, useState} from 'react';
import { getCookie } from 'cookies-next';
import { useWeb3 } from '../components/web3/providers'
import { useAccount } from '../components/web3/hooks'

const Apply = () => {
  const { web3, connect, contract } = useWeb3();
  const { account } = useAccount();
  const [application, setApplication] = useState({
    universityName: "",
    communityName: "",
    totalNumberOfCommunity: "",
    country: "",
    city: "",
    moderatorDomain: ""
  });
  
  const signAndSubmit = async (e) => {
    e.preventDefault();
    await connect();
    const sub = getCookie('sub');

    const msg = `Sign this message as ${sub}`;
    const hashedMessage = web3.utils.sha3(msg);
    console.log("hashed",hashedMessage)
    console.log(account.data)

    const signature = await web3.eth.personal.sign(hashedMessage, account.data);
    const r = signature.slice(0, 66);
    const s = "0x" + signature.slice(66, 130);
    const v = parseInt(signature.slice(130, 132), 16);
    console.log({ r, s, v });

    await contract.methods.applicationFunction(
      application.universityName,
      application.country,
      application.city,
      application.communityName,
      application.moderatorDomain,
      application.totalNumberOfCommunity,
      v,
      r,
      s,
      hashedMessage
    ).send({ from: account.data });
  };

  return (
     
<form className="mx-auto w-[50%] mt-20 mb-14">
  <div className="relative z-0 mb-8 w-full group">
      <input 
      value={application.universityName}
      onChange={(e) => setApplication({...application, universityName: e.target.value})}
      type="text" name="universityName" id="universityName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="universityName" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">University</label>
  </div>
  <div className="relative z-0 mb-8 w-full group">
      <input 
      value={application.communityName}
      onChange={(e) => setApplication({...application, communityName: e.target.value})}
      type="text" name="communityName" id="communityName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="communityName" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Community Name</label>
  </div>
  <div className="relative z-0 mb-8 w-full group">
      <input
      value={application.totalNumberOfCommunity}
      onChange={(e) => setApplication({...application, totalNumberOfCommunity: e.target.value})}
      type="text" name="total" id="total" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="total" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Number of Community</label>
  </div>
  <div className="relative z-0 mb-8 w-full group">
      <input 
      value={application.country}
      onChange={(e) => setApplication({...application, country: e.target.value})}
      type="text" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
  </div>
  <div className="relative z-0 mb-8 w-full group">
      <input 
      value={application.city}
      onChange={(e) => setApplication({...application, city: e.target.value})}
      type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
  </div>
  <div className="relative z-0 mb-8 w-full group">
      <input
      value={application.moderatorDomain}
      onChange={(e) => setApplication({...application, moderatorDomain: e.target.value})}
      type="text" name="moderator" id="moderator" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
      <label htmlFor="moderator" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Moderator Domain</label>
  </div>
  <button 
  onClick={(e) => signAndSubmit(e)}
  type="submit" className="text-white bg-[#4d47f8] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign {"&"} Submit</button>
</form>

  );
}

export default Apply;