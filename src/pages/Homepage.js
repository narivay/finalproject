import Header from "./components/header";
import Footer from "./components/footer";
import Sections from "./components/sections";
import Nav from "./components/nav";
import All from "./components/section_all";

export default function Homepage() {
    return (
        <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <title>Heroic Features - Start Bootstrap Template</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />
  {/* Responsive navbar*/}
  <Nav />
  {/* Header*/}
  <Header />
  {/* Page Content*/}
  <All />
  {/* Footer*/}
  <Footer />
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</div>


    )
}