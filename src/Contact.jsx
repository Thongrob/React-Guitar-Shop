import MainLayout from "./components/layouts/MainLayout";
import DocumentTitle from "react-document-title";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = ()=>{
  return (
    <MainLayout>
      <DocumentTitle title="ติดต่อเรา" />
      
      <div className="container mb-5">
        <h1 className="my-4">ติดต่อเรา</h1>
        <p> <i class="bi bi-envelope"></i> thongrob.tsr@gmail.com</p>
        <p> <i class="bi bi-telephone"></i> +66 2123 4567 </p>
        <p><i class="bi bi-house"></i> Bangkok, Thailand</p>
        
        
      </div>
    </MainLayout>
  );
}

export default Contact;
