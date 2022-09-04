import { useEffect, useState } from "react";
import Shared from "../components/shared";
import VendorHero from "../components/vendorHero";
import VendorMid from "../components/vendorMid";
import VendorJoin from "../components/vendorJoin";
import Download from "../components/download";
import Modal from "../components/modal";

const Vendor = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [modal, setModal] = useState(false);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0 py-8'>
        <VendorHero setModal={setModal} />
        <VendorMid setModal={setModal} />
        <VendorJoin setModal={setModal} />
        <Download />
        <Modal modal={modal} setModal={setModal} />
      </div>
    </Shared>
  );
};

export default Vendor;
