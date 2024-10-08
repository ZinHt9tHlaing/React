import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
} from "react-icons/hi2";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-5">
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<HiCircleStack className="size-11" />}
              url={"/product"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiComputerDesktop className="size-11" />}
              url={"/sale"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiDocumentDuplicate className="size-11" />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
