"use client";

import CreateServerModal from "@/components//modals/create-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import EditServerModal from "@/components/modals/edit-server-modal";
import MembersModal from "@/components/modals/members-modal";

import React, { useEffect, useState } from "react";
import CreateChannelModal from "@/components/modals/create-channel-modal";

const ModalProvider = () => {
  const [isMoundted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMoundted) return null;
  return (
    <>
      <CreateServerModal />
      <InviteModal/>
      <EditServerModal/>
      <MembersModal/>
      <CreateChannelModal/>
    </>
  );
};

export default ModalProvider;
