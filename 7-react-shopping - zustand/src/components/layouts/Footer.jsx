const Footer = () => {
  const date = new Date();

  return (
    <footer className=" mt-auto rounded-t bg-black text-center py-2 text-white w-full md:w-[720px] lg:w-[1000px] mx-auto">
      © {date.getFullYear()}{" "}
      <a
        href="https://mms-it.com/"
        target="_blank"
        className=" underline text-gray-300 hover:text-gray-400 duration-300"
      >
        MMS IT
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
