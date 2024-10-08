import Breadcrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import VoucherList from "../../components/VoucherList";

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"} />
        <h3 className="text-2xl font-bold">Voucher Lists</h3>
        <VoucherList />
      </Container>
    </section>
  );
};

export default VoucherPage;
