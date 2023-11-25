import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Chat from '../../components/Chat';
import ChatLayout from '../../components/ChatLayout';
import Header from '../../components/Header';
import OpenedMessage from '../../components/OpenedMessage';
import SubNavBar from '../../components/SubNavBar';

function ChatWith() {
  const router = useRouter();
  const { id } = router.query;

  const [viewAll, setViewAll] = useState(false)

  return (
    <div className="bg-default">
      <Head>
        <title>Task Management | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selectedTab="work" />
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 min-h-[75vh] lg:min-h-[85vh] pb-20">
        <h1 className="text-3xl font-semibold mt-11">Chats</h1>
        <SubNavBar selectedTab="chats" />
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 mt-5 flex flex-col">
          <ChatLayout />
          <div className="bg-[#F4F5F8] rounded-lg col-span-3 py-5 px-3 min-h-[70vh]">
            <OpenedMessage recipientId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWith