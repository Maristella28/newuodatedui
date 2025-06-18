import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'flowbite';

// Error Handling
import ErrorBoundary from './ErrorBoundary';

// Layouts
import AdminLayout from './AdminLayout';
import ResidentLayout from './ResidentLayout';

// Admin Pages
import AdminDashboard from './admin/AdminDashboard';
import DocumentsRecords from './admin/DocumentsRecords';
import ResidentsRecords from './admin/ResidentsRecords';
import HouseholdRecords from './admin/HouseholdRecords';
import BlotterRecords from './admin/BlotterRecords';
import FinancialTracking from './admin/FinancialTracking';
import BarangayOfficials from './admin/BarangayOfficials';
import CommunicationAnnouncement from './admin/CommunicationAnnouncement';
import DisasterEmergency from './admin/DisasterEmergency';
import InventoryAssets from './admin/InventoryAssets';
import ProjectManagement from './admin/ProjectManagement';
import SocialServices from './admin/SocialServices';
import AddResident from './admin/AddResident';

// Resident Pages
import Dashboard from './residents/Dashboard';
import BlotterAppointment from './residents/BlotterAppointment';
import OrganizationalChart from './residents/OrganizationalChart';
import Projects from './residents/Projects';
import AddFeedback from './residents/AddFeedback';
import RequestAssets from './residents/RequestAssets';
import RequestDocuments from './residents/RequestDocuments';
import StatusAssetRequests from './residents/statusassetRequests';
import BrgyClearance from './residents/BrgyClearance';
import BrgyBusinessPermit from './residents/BrgyBusinessPermit';
import BrgyIndigency from './residents/BrgyIndigency';
import BrgyResidency from './residents/BrgyResidency'; // ✅ New route

// Optional: 404 Page
// import NotFound from './NotFound'; // Create this component if needed

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        {/* Admin Section */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="documentsRecords" element={<DocumentsRecords />} />
          <Route path="residentsRecords" element={<ResidentsRecords />} />
          <Route path="addResident" element={<AddResident />} />
          <Route path="householdRecords" element={<HouseholdRecords />} />
          <Route path="blotterRecords" element={<BlotterRecords />} />
          <Route path="financialTracking" element={<FinancialTracking />} />
          <Route path="barangayOfficials" element={<BarangayOfficials />} />
          <Route path="communicationAnnouncement" element={<CommunicationAnnouncement />} />
          <Route path="disasterEmergency" element={<DisasterEmergency />} />
          <Route path="inventoryAssets" element={<InventoryAssets />} />
          <Route path="projectManagement" element={<ProjectManagement />} />
          <Route path="socialServices" element={<SocialServices />} />
        </Route>

        {/* Residents Section */}
        <Route path="/residents" element={<ResidentLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blotterAppointment" element={<BlotterAppointment />} />
          <Route path="organizationalChart" element={<OrganizationalChart />} />
          <Route path="projects" element={<Projects />} />
          <Route path="addFeedback" element={<AddFeedback />} />
          <Route path="requestAssets" element={<RequestAssets />} />
          <Route path="requestDocuments" element={<RequestDocuments />} />
          <Route path="statusassetrequests" element={<StatusAssetRequests />} />
          <Route path="brgyClearance" element={<BrgyClearance />} />
          <Route path="brgyBusinessPermit" element={<BrgyBusinessPermit />} />
          <Route path="brgyIndigency" element={<BrgyIndigency />} />
          <Route path="brgyResidency" element={<BrgyResidency />} /> {/* ✅ New route */}
        </Route>

        {/* Optional 404 Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);
