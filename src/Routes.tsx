import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { BASE_NAME } from "./constants/api";
import { store } from "./redux/store";

import PublicLayout from "./components/layout/PublicLayout";
import PortalLayout from "./components/layout/PortalLayout";
import AdminLayout from "./components/layout/AdminLayout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/home";
import AboutPage from "./pages/about";
import MissionPage from "./pages/mission";
import MembershipPage from "./pages/membership";
import ResidentialMembership from "./pages/membership/Residential";
import CommercialMembership from "./pages/membership/Commercial";
import SupplierPartnership from "./pages/membership/Supplier";
import MembershipBenefitsPage from "./pages/membership/Benefits";
import MembershipApply from "./pages/membership/Apply";
import MarketsPage from "./pages/markets";
import SuppliersPage from "./pages/suppliers";
import SupplierDetail from "./pages/suppliers/Detail";
import LocationsPage from "./pages/locations";
import ResourcesPage from "./pages/resources";
import ResourceDetail from "./pages/resources/Detail";
import TrainingPage from "./pages/training";
import NewsPage from "./pages/news";
import NewsDetail from "./pages/news/Detail";
import EventsPage from "./pages/events";
import SummitPage from "./pages/events/Summit";
import PodcastPage from "./pages/podcast";
import ContactPage from "./pages/contact";
import PrivacyPage from "./pages/legal/Privacy";
import TermsPage from "./pages/legal/Terms";
import AccessibilityPage from "./pages/legal/Accessibility";

import PortalLogin from "./pages/portal/Login";
import ForgotPassword from "./pages/portal/ForgotPassword";
import MfaPage from "./pages/portal/Mfa";
import PortalDashboard from "./pages/portal/Dashboard";
import PortalCommunity from "./pages/portal/Community";
import PortalOffers from "./pages/portal/Offers";
import PortalDocuments from "./pages/portal/Documents";
import PortalLearning from "./pages/portal/Learning";
import PortalFinancial from "./pages/portal/Financial";

import AdminOverview from "./pages/admin/Overview";
import AdminMembers from "./pages/admin/Members";
import AdminContent from "./pages/admin/Content";
import AdminModeration from "./pages/admin/Moderation";
import AdminAudit from "./pages/admin/Audit";

function AppRoutes() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_NAME}>
        <ScrollToTop />
        <Routes>
          {/* Public website */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route
              path="/membership/residential"
              element={<ResidentialMembership />}
            />
            <Route
              path="/membership/commercial"
              element={<CommercialMembership />}
            />
            <Route
              path="/membership/supplier"
              element={<SupplierPartnership />}
            />
            <Route
              path="/membership/benefits"
              element={<MembershipBenefitsPage />}
            />
            <Route path="/membership/apply" element={<MembershipApply />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/suppliers/:slug" element={<SupplierDetail />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetail />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/summit" element={<SummitPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Route>

          {/* Auth screens (no public chrome) */}
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/forgot-password" element={<ForgotPassword />} />
          <Route path="/portal/mfa" element={<MfaPage />} />

          {/* Member portal shells */}
          <Route path="/portal" element={<PortalLayout />}>
            <Route index element={<PortalDashboard />} />
            <Route path="community" element={<PortalCommunity />} />
            <Route path="offers" element={<PortalOffers />} />
            <Route path="documents" element={<PortalDocuments />} />
            <Route path="learning" element={<PortalLearning />} />
            <Route path="financial" element={<PortalFinancial />} />
          </Route>

          {/* Admin shells */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="members" element={<AdminMembers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="moderation" element={<AdminModeration />} />
            <Route path="audit" element={<AdminAudit />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRoutes;
