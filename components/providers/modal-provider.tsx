"use client";

import CreateServerModal from "@/components//modals/create-server-modal";

import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMoundted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMoundted) return null;
  return (
    <>
      <CreateServerModal />
    </>
  );
};

export default ModalProvider;
