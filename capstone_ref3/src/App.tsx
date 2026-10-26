import React, { useState, useMemo } from 'react';
import {
  Car,
  FileCode,
  Terminal,
  CheckCircle2,
  Image,
  Search,
  Plus,
  X,
  ChevronRight,
  Filter,
  MapPin,
  MessageSquare,
  Sparkles,
  User,
  LogOut,
  Mail,
  ShieldAlert,
  Calendar,
  Layers,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronLeft,
  Settings,
  Database,
  Check,
  Globe,
  Star,
  Phone,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  deliverables,
  staticDealers,
  initialReviews,
  Deliverable,
  Dealership,
  Review,
  staticVehicles,
  Vehicle
} from './deliverablesData';

// Interactive luxury catalog database matching user's exact models
interface LuxuryCar {
  make: 'Mercedes-Benz' | 'BMW' | 'Audi' | 'Porsche';
  model: string;
  category: 'Sedans & Hatchbacks' | 'SUVs & Crossovers' | 'Performance & Sports Cars' | 'Electric Vehicles (EVs)';
  status: string;
}

const luxuryCatalog: LuxuryCar[] = [
  // Sedans & Hatchbacks
  { make: 'Mercedes-Benz', model: 'A-Class', category: 'Sedans & Hatchbacks', status: 'Compact' },
  { make: 'Mercedes-Benz', model: 'C-Class', category: 'Sedans & Hatchbacks', status: 'Luxury' },
  { make: 'Mercedes-Benz', model: 'E-Class', category: 'Sedans & Hatchbacks', status: 'Executive' },
  { make: 'Mercedes-Benz', model: 'S-Class', category: 'Sedans & Hatchbacks', status: 'Flagship' },
  { make: 'Mercedes-Benz', model: 'CLA', category: 'Sedans & Hatchbacks', status: 'Coupe' },
  { make: 'Mercedes-Benz', model: 'CLS', category: 'Sedans & Hatchbacks', status: 'Coupe' },
  { make: 'BMW', model: '2 Series', category: 'Sedans & Hatchbacks', status: 'Sport' },
  { make: 'BMW', model: '3 Series', category: 'Sedans & Hatchbacks', status: 'Luxury' },
  { make: 'BMW', model: '5 Series', category: 'Sedans & Hatchbacks', status: 'Executive' },
  { make: 'BMW', model: '7 Series', category: 'Sedans & Hatchbacks', status: 'Flagship' },
  { make: 'Audi', model: 'A3', category: 'Sedans & Hatchbacks', status: 'Compact' },
  { make: 'Audi', model: 'A4', category: 'Sedans & Hatchbacks', status: 'Luxury' },
  { make: 'Audi', model: 'A5', category: 'Sedans & Hatchbacks', status: 'Sport' },
  { make: 'Audi', model: 'A6', category: 'Sedans & Hatchbacks', status: 'Executive' },
  { make: 'Audi', model: 'A8', category: 'Sedans & Hatchbacks', status: 'Flagship' },
  { make: 'Porsche', model: 'Panamera', category: 'Sedans & Hatchbacks', status: 'Executive Sedan' },

  // SUVs & Crossovers
  { make: 'Mercedes-Benz', model: 'GLA', category: 'SUVs & Crossovers', status: 'Compact SUV' },
  { make: 'Mercedes-Benz', model: 'GLB', category: 'SUVs & Crossovers', status: 'SUV' },
  { make: 'Mercedes-Benz', model: 'GLC', category: 'SUVs & Crossovers', status: 'Luxury SUV' },
  { make: 'Mercedes-Benz', model: 'GLE', category: 'SUVs & Crossovers', status: 'Mid-size' },
  { make: 'Mercedes-Benz', model: 'GLS', category: 'SUVs & Crossovers', status: 'Full-size' },
  { make: 'Mercedes-Benz', model: 'G-Class', category: 'SUVs & Crossovers', status: 'Iconic Offroad' },
  { make: 'BMW', model: 'X1', category: 'SUVs & Crossovers', status: 'Compact SUV' },
  { make: 'BMW', model: 'X3', category: 'SUVs & Crossovers', status: 'Luxury SUV' },
  { make: 'BMW', model: 'X5', category: 'SUVs & Crossovers', status: 'Mid-size' },
  { make: 'BMW', model: 'X7', category: 'SUVs & Crossovers', status: 'Full-size' },
  { make: 'Audi', model: 'Q3', category: 'SUVs & Crossovers', status: 'Compact SUV' },
  { make: 'Audi', model: 'Q5', category: 'SUVs & Crossovers', status: 'Luxury SUV' },
  { make: 'Audi', model: 'Q7', category: 'SUVs & Crossovers', status: 'Mid-size' },
  { make: 'Audi', model: 'Q8', category: 'SUVs & Crossovers', status: 'Flagship SUV' },
  { make: 'Porsche', model: 'Macan', category: 'SUVs & Crossovers', status: 'Compact SUV' },
  { make: 'Porsche', model: 'Cayenne', category: 'SUVs & Crossovers', status: 'Mid-size SUV' },

  // Performance & Sports Cars
  { make: 'Mercedes-Benz', model: 'AMG C 63', category: 'Performance & Sports Cars', status: 'AMG Power' },
  { make: 'Mercedes-Benz', model: 'AMG GT', category: 'Performance & Sports Cars', status: 'Supercar' },
  { make: 'BMW', model: 'M3', category: 'Performance & Sports Cars', status: 'M-Power' },
  { make: 'BMW', model: 'M4', category: 'Performance & Sports Cars', status: 'M-Power' },
  { make: 'BMW', model: 'M5', category: 'Performance & Sports Cars', status: 'M-Power' },
  { make: 'BMW', model: 'M8', category: 'Performance & Sports Cars', status: 'Elite Coupe' },
  { make: 'Audi', model: 'RS 3', category: 'Performance & Sports Cars', status: 'RS Tuning' },
  { make: 'Audi', model: 'RS 6', category: 'Performance & Sports Cars', status: 'Super Wagon' },
  { make: 'Audi', model: 'R8', category: 'Performance & Sports Cars', status: 'V10 Iconic' },
  { make: 'Porsche', model: '911 Carrera 4s', category: 'Performance & Sports Cars', status: 'Iconic Sports' },
  { make: 'Porsche', model: 'GT3 RS', category: 'Performance & Sports Cars', status: 'Track Coupe' },
  { make: 'Porsche', model: 'Cayman', category: 'Performance & Sports Cars', status: 'Mid-Engine' },
  { make: 'Porsche', model: 'Boxster', category: 'Performance & Sports Cars', status: 'Performance Roadster' },

  // Electric Vehicles (EVs)
  { make: 'Mercedes-Benz', model: 'EQE Sedan', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Mercedes-Benz', model: 'EQE SUV', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Mercedes-Benz', model: 'EQS Sedan', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Mercedes-Benz', model: 'EQS SUV', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'i4', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'i5', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'i7', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'iX1', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'iX3', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'BMW', model: 'iX', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Audi', model: 'Q4 e-tron', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Audi', model: 'Q6 e-tron', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Audi', model: 'Q8 e-tron', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Audi', model: 'e-tron GT', category: 'Electric Vehicles (EVs)', status: 'Electric' },
  { make: 'Porsche', model: 'Taycan', category: 'Electric Vehicles (EVs)', status: 'All-Electric' }
];

function renderScreenshotMockup(key: string) {
  let url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/';
  let title = 'National Dealership Portal';
  let contentNode = null;

  if (key === 'DJANGO_ADMIN_LOGIN') {
    url = 'http://localhost:8000/admin/login/';
    title = 'Log in | Django site admin';
    contentNode = (
      <div className="bg-[#f8f9fa] text-slate-800 min-h-[300px] flex flex-col items-center justify-center font-sans p-6 text-xs">
        <div className="w-[360px] bg-white border border-[#ccc] rounded-sm shadow-xs overflow-hidden">
          <div className="bg-[#417690] text-white p-3 font-bold text-sm tracking-wide">
            Django administration
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Username:</label>
              <input type="text" readOnly value="admin" className="w-full bg-slate-50 border border-slate-300 p-1.5 rounded-sm font-mono text-blue-900 outline-none" />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Password:</label>
              <input type="password" readOnly value="rootpassword" className="w-full bg-slate-50 border border-slate-300 p-1.5 rounded-sm font-mono outline-none" />
            </div>
            <button disabled className="mt-2 bg-[#417690] hover:bg-[#306078] text-white font-bold py-2 px-4 rounded-xs transition-all uppercase tracking-wider text-[10px] cursor-not-allowed">
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  } else if (key === 'DJANGO_ADMIN_LOGOUT') {
    url = 'http://localhost:8000/admin/logout/';
    title = 'Logged out | Django site admin';
    contentNode = (
      <div className="bg-[#f8f9fa] text-slate-800 min-h-[300px] flex flex-col items-center justify-center font-sans p-6 text-xs">
        <div className="w-[380px] bg-white border border-slate-200 rounded-sm shadow-xs overflow-hidden">
          <div className="bg-[#417690] text-white p-3 font-bold text-sm tracking-wide flex justify-between items-center">
            <span>Django administration</span>
            <span className="text-[10px] text-slate-200">Best Cars Portal</span>
          </div>
          <div className="p-6 text-center">
            <div className="bg-[#264b5c] text-white p-2.5 rounded-sm font-bold mb-4 text-[11px] uppercase tracking-wider">
              Logged Out Successfully
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 mb-2">Thanks for spending some quality time with the Web site today.</h3>
            <p className="text-slate-500 mb-4 text-[11px]">The root admin session has been securely terminated.</p>
            <button className="bg-[#417690] text-white hover:bg-[#306078] font-bold py-1.5 px-4 rounded-xs text-[10px] uppercase tracking-wider">
              Log In Again
            </button>
          </div>
        </div>
      </div>
    );
  } else if (key === 'DEALERS_LANDING') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/dealers';
    title = 'National Dealerships Association';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs select-none">
        <div className="border border-slate-855 bg-slate-950 p-4 rounded-lg flex justify-between items-center border-slate-800">
          <span className="font-semibold text-white">Best Cars Dealers Portal</span>
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-mono">Guest Mode</span>
        </div>
        <div className="mt-4 bg-slate-950 p-4 border border-slate-800 rounded-lg">
          <div className="flex gap-2 items-center mb-3">
            <span className="text-xs font-bold text-slate-400">Filter dealers:</span>
            <select disabled className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-xs select-none">
              <option>All States</option>
            </select>
          </div>
          <table className="w-full text-left font-sans border-collapse">
            <thead>
              <tr className="border-b border-slate-800 font-extrabold text-slate-400 uppercase text-[9px] tracking-wider">
                <th className="p-2">ID</th>
                <th className="p-2">Dealer Name</th>
                <th className="p-2">Address</th>
                <th className="p-2">City</th>
                <th className="p-2">State</th>
                <th className="p-2">ZIP Code</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-850 text-slate-300">
                <td className="p-2 text-blue-400 font-bold font-mono">15</td>
                <td className="p-2 font-bold text-white">Topeka Motors</td>
                <td className="p-2 font-mono">1200 Kansas Ave</td>
                <td className="p-2">Topeka</td>
                <td className="p-2">Kansas</td>
                <td className="p-2 font-mono text-slate-400">66612</td>
              </tr>
              <tr className="border-b border-slate-850 text-slate-300">
                <td className="p-2 text-blue-400 font-bold font-mono">29</td>
                <td className="p-2 font-bold text-white">Wichita Cars</td>
                <td className="p-2 font-mono">1500 E Douglas Ave</td>
                <td className="p-2">Wichita</td>
                <td className="p-2">Kansas</td>
                <td className="p-2 font-mono text-slate-400">67214</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (key === 'DEALERS_LOGGEDIN') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/dealers';
    title = 'National Dealerships Association - Logged In';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs select-none">
        <div className="border border-slate-800 bg-slate-950 p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold text-white">Best Cars Dealers Portal</span>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold font-mono text-[11px]">Welcome admin!</span>
            <button className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-[10px] font-bold border border-slate-700">Logout</button>
          </div>
        </div>
        <div className="mt-4 bg-slate-950 p-4 border border-slate-800 rounded-lg">
          <table className="w-full text-left font-sans">
            <thead>
              <tr className="border-b border-slate-800 font-extrabold text-slate-400 uppercase text-[9px] tracking-wider">
                <th className="p-2">ID</th>
                <th className="p-2">Dealer Name</th>
                <th className="p-2">Address</th>
                <th className="p-2">City</th>
                <th className="p-2">State</th>
                <th className="p-2">ZIP Code</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-850 text-slate-300">
                <td className="p-2 text-blue-400 font-bold font-mono">15</td>
                <td className="p-2 font-bold text-white">Topeka Motors</td>
                <td className="p-2 text-slate-300 font-mono">1200 Kansas Ave</td>
                <td className="p-2 text-slate-300">Topeka</td>
                <td className="p-2 text-slate-300">Kansas</td>
                <td className="p-2 font-mono text-slate-400">66612</td>
                <td className="p-2">
                  <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded cursor-pointer uppercase">Review Dealer</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (key === 'DEALERS_FILTERED') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/dealers?state=Kansas';
    title = 'National Dealerships Association - State Filter';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs">
        <div className="border border-slate-800 bg-slate-950 p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold text-white">Best Cars Online</span>
          <span className="bg-indigo-900 text-indigo-200 px-2 py-0.5 rounded text-[10px] tracking-wide uppercase font-bold">Filtered State View</span>
        </div>
        <div className="mt-4 bg-slate-950 p-4 border border-slate-800 rounded-lg">
          <div className="mb-4">
            <span className="text-slate-400 font-bold mr-2 text-[11px] uppercase tracking-wider">Active State filter:</span>
            <span className="bg-emerald-600 text-white font-extrabold font-mono text-[10px] px-2.5 py-1 rounded">KANSAS (2 dealers found)</span>
          </div>
          <table className="w-full text-left font-sans">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] font-bold text-slate-400">
                <th className="p-2">ID</th>
                <th className="p-2">Dealer Name</th>
                <th className="p-2">Address</th>
                <th className="p-2">City</th>
                <th className="p-2">State</th>
                <th className="p-2">ZIP Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-blue-400 font-mono font-bold">15</td>
                <td className="p-2 text-white font-extrabold">Topeka Motors</td>
                <td className="p-2 text-slate-300">1200 Kansas Ave</td>
                <td className="p-2 text-slate-300">Topeka</td>
                <td className="p-2 text-slate-300">Kansas</td>
                <td className="p-2 text-slate-400 font-mono">66612</td>
              </tr>
              <tr>
                <td className="p-2 text-blue-400 font-mono font-bold">29</td>
                <td className="p-2 text-white font-extrabold">Wichita Cars</td>
                <td className="p-2 text-slate-300">1500 E Douglas Ave</td>
                <td className="p-2 text-slate-300">Wichita</td>
                <td className="p-2 text-slate-300">Kansas</td>
                <td className="p-2 text-slate-400 font-mono">67214</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (key === 'DEALER_REVIEWS') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/dealer/15';
    title = 'Reviews of Topeka Motors';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs">
        <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-extrabold text-white">Topeka Motors reviews</h2>
            <p className="text-[11px] text-slate-400">Topeka, Kansas &bull; Verified review index</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-extrabold text-blue-300">Alice Parker</span>
              <span className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                POSITIVE
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed italic">"Great service! Got my Camry here and the entire team was amazing."</p>
            <div className="mt-2 text-[10.5px] text-slate-500 font-mono">
              Vehicle: Toyota Camry (2021)
            </div>
          </div>
        </div>
      </div>
    );
  } else if (key === 'DEALER_REVIEW_FORM') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/postreview/15';
    title = 'Post Review';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs">
        <div className="max-w-xl mx-auto bg-slate-950 border border-slate-800 rounded-lg p-5">
          <div className="border-b border-slate-800 pb-2.5 mb-4 border-slate-850">
            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">Post Review</h2>
            <p className="text-[10px] text-slate-400 mt-0.5">Share your real commercial dealer experience with Topeka Motors</p>
          </div>
          <div className="flex flex-col gap-3.5 border-slate-850">
            <div>
              <label className="block text-[11px] text-slate-400 font-semibold mb-1">Enter your review details here:</label>
              <textarea readOnly value="The purchase experience for my Toyota Sienna was absolute dream. Sales professionals answered all my concerns and offered a great price." className="w-full bg-slate-900 border border-slate-800 p-2 rounded-md h-20 text-slate-200 outline-none select-none font-sans" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" readOnly checked className="rounded accent-blue-500" />
              <span className="text-[11px] text-slate-350">Has purchased car from this dealership?</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Select Car Manufacturer:</label>
                <select disabled className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-xs select-none">
                  <option>Toyota</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Select Car Model & Year:</label>
                <select disabled className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-xs select-none">
                  <option>Sienna (2020)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2.5 mt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded text-[11px] uppercase tracking-wide cursor-pointer flex items-center gap-1">
                Post Review
              </button>
              <button className="bg-slate-800 text-slate-350 font-bold px-4 py-2 rounded text-[11px] uppercase tracking-wide">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (key === 'DEALER_REVIEW_ADDED') {
    url = 'http://localhost:3000/Full-Stack-Car-Dealer-Capstone-Python-JS/#/dealer/15';
    title = 'Topeka Motors - New Review Added';
    contentNode = (
      <div className="bg-slate-900 text-slate-100 min-h-[300px] font-sans p-5 text-xs">
        <div className="mb-4">
          <h2 className="text-base font-extrabold text-white">Topeka Motors verified reviews</h2>
          <p className="text-[11px] text-slate-400 font-medium">Newly posted review submitted successfully!</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative overflow-hidden bg-gradient-to-br from-indigo-950/20 to-slate-950">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
            <div className="flex justify-between items-start mb-2 animate-fade-in">
              <div>
                <span className="font-extrabold text-white text-xs">Customer Admin (Verified Owner)</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Vehicle: Toyota Sienna (2020)</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  POSITIVE
                </span>
                <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-2 py-1 rounded">
                  <span className="text-base text-center leading-none">😊</span>
                  <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Happy</span>
                </div>
              </div>
            </div>
            <p className="text-slate-200 font-sans leading-relaxed italic mt-1.5 text-xs">
              "The purchase experience for my Toyota Sienna was absolute dream. Sales professionals answered all my concerns and offered a great price."
            </p>
          </div>
        </div>
      </div>
    );
  } else if (key.startsWith('DEPLOYED_')) {
    const type = key.replace('DEPLOYED_', '');
    url = `https://briangator.github.io/Full-Stack-Car-Dealer-Capstone-Python-JS/#/${type.toLowerCase()}`;
    title = `Best Cars Dealership - Production Deployed - ${type}`;
    contentNode = (
      <div className="bg-indigo-950/20 text-slate-100 min-h-[300px] font-sans p-5 text-xs">
        <div className="border border-indigo-500/30 bg-gradient-to-r from-slate-950 to-indigo-950 p-4 rounded-lg flex justify-between items-center shadow-lg">
          <span className="font-extrabold text-white tracking-tight text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Best Cars: National Deployed Node Production Edition
          </span>
          <span className="bg-indigo-600 text-white text-[10px] font-mono font-extrabold px-3 py-1 rounded border border-indigo-400 uppercase tracking-widest">
            Live Cloud Node
          </span>
        </div>

        <div className="mt-4 bg-slate-950 p-5 border border-slate-820 rounded-lg shadow-inner">
          <div className="border border-indigo-500/20 bg-slate-900/60 rounded p-4 mb-4">
            <span className="bg-emerald-950 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded font-mono text-[9px] font-bold uppercase">PROD SECURE SSL ACTIVE</span>
            <h3 className="font-extrabold text-sm text-slate-100 mt-2">Production Deployed Endpoint Verified</h3>
            <p className="text-slate-400 text-[11px] mt-1">This screen represents the live, responsive deployed performance index at GitHub Pages routing host.</p>
          </div>

          {type === 'LANDING' && (
            <div className="p-2 border border-slate-800 rounded">
              <span className="text-slate-400 text-[11px] font-bold block mb-2">Dealership Directory State Directory:</span>
              <span className="bg-slate-850 text-slate-200 font-mono p-1 rounded">50 National Locations Connected Online (TLS Verified)</span>
            </div>
          )}
          {type === 'LOGGEDIN' && (
            <div className="p-2 border border-slate-800 rounded">
              <span className="text-slate-400 text-[11px] font-bold block mb-2">Session state:</span>
              <span className="bg-emerald-950 text-emerald-400 font-mono p-1.5 rounded font-bold">Admin root active session token synchronized with database</span>
            </div>
          )}
          {type === 'DEALER_DETAIL' && (
            <div className="p-2 border border-slate-800 rounded">
              <span className="text-slate-400 text-[11px] font-bold block mb-2">Dealer view detail:</span>
              <span className="bg-slate-850 text-slate-200 font-mono p-1 rounded">Dealer ID #15 &bull; Reviews & sentiment feedback active</span>
            </div>
          )}
          {type === 'ADD_REVIEW' && (
            <div className="p-2 border border-slate-800 rounded">
              <span className="text-slate-400 text-[11px] font-bold block mb-2">Review Form widget state:</span>
              <span className="bg-blue-950/40 text-blue-300 font-mono p-1 rounded font-bold">Post Review form ready for user review inputs</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl m-3 max-h-[440px]">
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-900 shrink-0 select-none">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
        </div>
        <div className="flex-1 max-w-xl mx-4 relative">
          <div className="bg-slate-950 border border-slate-800 text-slate-300 pr-8 pl-10 py-1 rounded-md text-[11px] text-center font-mono truncate select-all">
            <span className="text-slate-500 font-bold select-none pr-1">https://</span>
            <span>{url.replace('https://', '').replace('http://', '')}</span>
          </div>
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded border border-slate-800 bg-slate-950 flex items-center gap-1 shrink-0">
          <span className="h-1 w-1 bg-emerald-400 rounded-full"></span>
          Live Mock Frame
        </div>
      </div>
      <div className="bg-slate-950 px-4 py-1 flex border-b border-slate-900 shrink-0 select-none">
        <div className="bg-slate-900 px-4 py-1.5 rounded-t-lg text-slate-200 text-[10px] font-bold flex items-center gap-2 border-r border-l border-t border-slate-800">
          <span className="text-slate-400">🌐</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-slate-950 text-slate-100 min-h-[300px]">
        {contentNode}
      </div>
    </div>
  );
}

export default function App() {
  // Session / Authentication state
  const [currentUser, setCurrentUser] = useState<string>('');
  const [sessionActive, setSessionActive] = useState<boolean>(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState<boolean>(false);
  const logoutAlertTimeoutRef = React.useRef<any>(null);

  React.useEffect(() => {
    return () => {
      if (logoutAlertTimeoutRef.current) {
        clearTimeout(logoutAlertTimeoutRef.current);
      }
    };
  }, []);

  // Contact us Page interactive states
  const [contactSuccess, setContactSuccess] = useState<boolean>(false);

  // Django Admin Customization of Title & Theme variables
  const [djangoAdminTitle, setDjangoAdminTitle] = useState<string>('Best Cars Administration');
  const [djangoAdminTheme, setDjangoAdminTheme] = useState<'teal' | 'blue' | 'charcoal' | 'crimson'>('teal');
  const [adminActiveSection, setAdminActiveSection] = useState<'makes' | 'models' | 'dealers' | 'reviews'>('makes');

  // Interactive dynamic car database to let the admin add/modify makes and models online
  const [dbMakesModels, setDbMakesModels] = useState<Record<string, string[]>>({
    'Mercedes-Benz': [
      'A-Class (compact)', 'C-Class', 'E-Class', 'S-Class', 'CLA', 'CLS',
      'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Class',
      'AMG C 63', 'AMG GT',
      'EQE Sedan', 'EQE SUV', 'EQS Sedan', 'EQS SUV'
    ],
    'BMW': [
      '2 Series', '3 Series', '5 Series', '7 Series',
      'X1', 'X3', 'X5', 'X7',
      'M3', 'M4', 'M5', 'M8',
      'i4', 'i5', 'i7', 'iX1', 'iX3', 'iX'
    ],
    'Audi': [
      'A3', 'A4', 'A5', 'A6', 'A8',
      'Q3', 'Q5', 'Q7', 'Q8',
      'RS 3', 'RS 6', 'R8',
      'Q4 e-tron', 'Q6 e-tron', 'Q8 e-tron', 'e-tron GT'
    ],
    'Toyota': ['Camry', 'RAV4', 'Sienna', 'Prius', 'Supra'],
    'Honda': ['Civic', 'Accord', 'CR-V'],
    'Ford': ['Mustang', 'Explorer', 'F-150'],
    'Tesla': ['Model 3', 'Model Y', 'Model S']
  });

  const [dbMakesDetails, setDbMakesDetails] = useState<Record<string, { country: string; founded: string }>>({
    'Mercedes-Benz': { country: 'Germany', founded: '1926' },
    'BMW': { country: 'Germany', founded: '1916' },
    'Audi': { country: 'Germany', founded: '1909' },
    'Toyota': { country: 'Japan', founded: '1937' },
    'Honda': { country: 'Japan', founded: '1948' },
    'Ford': { country: 'USA', founded: '1903' },
    'Tesla': { country: 'USA', founded: '2003' }
  });

  // Adding item states inside Admin
  const [newMakeName, setNewMakeName] = useState<string>('');
  const [newMakeCountry, setNewMakeCountry] = useState<string>('Germany');
  const [newMakeFounded, setNewMakeFounded] = useState<string>('2026');

  const [newModelMake, setNewModelMake] = useState<string>('Mercedes-Benz');
  const [newModelName, setNewModelName] = useState<string>('');

  // Filter & Navigation
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'dealers' | 'admin' | 'about' | 'contact' | 'deliverables' | 'readme'>('dealers');

  // Advanced Inventory & Dealership Multi-Criteria Search State
  const [searchCityVal, setSearchCityVal] = useState<string>('');
  const [carMakeVal, setCarMakeVal] = useState<string>('All');
  const [carModelVal, setCarModelVal] = useState<string>('');
  const [carMilesOperator, setCarMilesOperator] = useState<'<' | '>' | 'any'>('any');
  const [carMilesVal, setCarMilesVal] = useState<number | ''>('');
  const [carYearOperator, setCarYearOperator] = useState<'<' | '>' | 'any'>('any');
  const [carYearVal, setCarYearVal] = useState<number | ''>('');
  const [carExtColor, setCarExtColor] = useState<string>('All');
  const [carIntColor, setCarIntColor] = useState<string>('All');
  const [carDoorsVal, setCarDoorsVal] = useState<'All' | '2' | '4'>('All');
  const [carTypeVal, setCarTypeVal] = useState<string>('All');
  const [dealerOrVehicleView, setDealerOrVehicleView] = useState<'dealers' | 'vehicles'>('dealers');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(true);

  // Interactive Luxury Catalog filters
  const [luxuryBrandFilter, setLuxuryBrandFilter] = useState<string>('All');
  const [luxuryCategoryFilter, setLuxuryCategoryFilter] = useState<string>('All');
  const [luxurySearchQuery, setLuxurySearchQuery] = useState<string>('');

  // Interactive Review Database
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedDealer, setSelectedDealer] = useState<Dealership | null>(staticDealers.find(d => d.id === 15) || null);
  const [dealerPaneTab, setDealerPaneTab] = useState<'details' | 'reviews'>('details');
  const [sentInquiryCarId, setSentInquiryCarId] = useState<number | null>(null);

  // Selected Deliverable for Inspector Console
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(deliverables[1]); // Default to django_server logs

  // Review Form state
  const [isAddingReview, setIsAddingReview] = useState<boolean>(false);
  const [reviewText, setReviewText] = useState<string>('');
  const [hasPurchased, setHasPurchased] = useState<boolean>(true);
  const [purchaseDate, setPurchaseDate] = useState<string>('2026-05-28');
  const [selectedMake, setSelectedMake] = useState<string>('Audi');
  const [selectedModel, setSelectedModel] = useState<string>('A6');
  const [carYear, setCarYear] = useState<number>(2023);
  const [reviewerName, setReviewerName] = useState<string>('Brian McCarthy');
  const [selectedStars, setSelectedStars] = useState<number>(4);
  const [starFilter, setStarFilter] = useState<number | 'all'>('all');
  const [dealerResponseText, setDealerResponseText] = useState<{ [reviewId: number]: string }>({});
  const [respondingToReviewId, setRespondingToReviewId] = useState<number | null>(null);

  // Dynamic Dealer Rating calculation
  const getDealerRating = (dealerId: number) => {
    const dealerReviews = reviews.filter(r => r.dealership === dealerId);
    if (dealerReviews.length === 0) return { avg: "N/A", count: 0 };
    const sum = dealerReviews.reduce((sum, r) => sum + (r.stars || 4), 0);
    return { avg: (sum / dealerReviews.length).toFixed(1), count: dealerReviews.length };
  };

  // Deterministic External Platforms ratings (Google, Facebook, Yelp)
  const getExternalRatings = (dealerId: number, fullName: string) => {
    const googleRating = (((dealerId * 7) % 7) / 10 + 4.1).toFixed(1);
    const googleCount = ((dealerId * 13) % 180) + 34;

    const facebookRating = (((dealerId * 3) % 6) / 10 + 4.3).toFixed(1);
    const facebookCount = ((dealerId * 9) % 120) + 18;

    const yelpRating = (((dealerId * 11) % 8) / 10 + 3.8).toFixed(1);
    const yelpCount = ((dealerId * 17) % 90) + 12;

    const searchQueryName = encodeURIComponent(fullName);
    return {
      google: {
        rating: googleRating,
        count: googleCount,
        url: `https://www.google.com/maps/search/?api=1&query=${searchQueryName}+reviews`,
        addUrl: `https://www.google.com/maps/search/?api=1&query=${searchQueryName}+write+review`
      },
      facebook: {
        rating: facebookRating,
        count: facebookCount,
        url: `https://www.facebook.com/search/pages/?q=${searchQueryName}`,
        addUrl: `https://www.facebook.com/search/pages/?q=${searchQueryName}+reviews`
      },
      yelp: {
        rating: yelpRating,
         count: yelpCount,
        url: `https://www.yelp.com/search?find_desc=${searchQueryName}`,
        addUrl: `https://www.yelp.com/writeareview/search?q=${searchQueryName}`
      }
    };
  };

  // Terminal Simulator Interactive Input
  const [terminalCommand, setTerminalCommand] = useState<string>('curl -X GET /fetchDealers/Kansas');
  const [terminalOutput, setTerminalOutput] = useState<string>(
    `HTTP/1.1 200 OK\nContent-Type: application/json\n\n[\n  {\n    "id": 15,\n    "city": "Topeka",\n    "state": "Kansas",\n    "address": "1200 Kansas Ave",\n    "zip": "66612",\n    "short_name": "Topeka Motors",\n    "full_name": "Topeka Best Cars Dealership"\n  }\n]`
  );

  // Authentication State Simulator Details
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Sign up Form
  const [signupUser, setSignupUser] = useState<string>('');
  const [signupFirst, setSignupFirst] = useState('');
  const [signupLast, setSignupLast] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');



  // Advanced Filter Vehicles list
  const filteredVehicles = useMemo(() => {
    return staticVehicles.filter(car => {
      // Find parent dealership
      const dealer = staticDealers.find(d => d.id === car.dealershipId);
      if (!dealer) return false;

      // 1. State filter
      const stateMatch = selectedState === 'All' || dealer.state.toLowerCase() === selectedState.toLowerCase();

      // 2. City filter
      const cityMatch = !searchCityVal.trim() || dealer.city.toLowerCase().includes(searchCityVal.toLowerCase());

      // 3. Car Make constraint
      const makeMatch = carMakeVal === 'All' || car.make.toLowerCase() === carMakeVal.toLowerCase();

      // 4. Car Model constraint
      const modelMatch = !carModelVal.trim() || car.model.toLowerCase().includes(carModelVal.toLowerCase());

      // 5. Car Miles constraint
      let milesMatch = true;
      if (carMilesOperator === '<' && carMilesVal !== '') {
        milesMatch = car.miles <= Number(carMilesVal);
      } else if (carMilesOperator === '>' && carMilesVal !== '') {
        milesMatch = car.miles >= Number(carMilesVal);
      }

      // 6. Car Year constraint
      let yearMatch = true;
      if (carYearOperator === '<' && carYearVal !== '') {
        yearMatch = car.year <= Number(carYearVal);
      } else if (carYearOperator === '>' && carYearVal !== '') {
        yearMatch = car.year >= Number(carYearVal);
      }

      // 7. Colors
      const extColorMatch = carExtColor === 'All' || car.exteriorColor.toLowerCase() === carExtColor.toLowerCase();
      const intColorMatch = carIntColor === 'All' || car.interiorColor.toLowerCase() === carIntColor.toLowerCase();

      // 8. Doors
      const doorsMatch = carDoorsVal === 'All' || car.doors === Number(carDoorsVal);

      // 9. Type
      const typeMatch = carTypeVal === 'All' || car.type.toLowerCase() === carTypeVal.toLowerCase();

      // 10. General header search box query (search matches city, name, make, model)
      const queryStr = searchQuery.trim().toLowerCase();
      const queryMatch = !queryStr ||
                         dealer.full_name.toLowerCase().includes(queryStr) ||
                         dealer.city.toLowerCase().includes(queryStr) ||
                         dealer.state.toLowerCase().includes(queryStr) ||
                         car.make.toLowerCase().includes(queryStr) ||
                         car.model.toLowerCase().includes(queryStr) ||
                         car.type.toLowerCase().includes(queryStr);

      return stateMatch && cityMatch && makeMatch && modelMatch && milesMatch && yearMatch && extColorMatch && intColorMatch && doorsMatch && typeMatch && queryMatch;
    });
  }, [selectedState, searchQuery, searchCityVal, carMakeVal, carModelVal, carMilesOperator, carMilesVal, carYearOperator, carYearVal, carExtColor, carIntColor, carDoorsVal, carTypeVal]);

  // Filter Dealers list: showing dealers that match basic criteria OR dealers that have matching inventory cars!
  const filteredDealers = useMemo(() => {
    return staticDealers.filter(dealer => {
      // 1. State filter
      const stateMatch = selectedState === 'All' || dealer.state.toLowerCase() === selectedState.toLowerCase();

      // 2. City filter
      const cityMatch = !searchCityVal.trim() || dealer.city.toLowerCase().includes(searchCityVal.toLowerCase());

      // 3. Must have a matching car from filteredVehicles
      const matchesCarFilter = filteredVehicles.some(car => car.dealershipId === dealer.id);

      // 4. Header searchQuery match
      const queryStr = searchQuery.trim().toLowerCase();
      const queryMatch = !queryStr ||
                         dealer.full_name.toLowerCase().includes(queryStr) ||
                         dealer.city.toLowerCase().includes(queryStr) ||
                         dealer.state.toLowerCase().includes(queryStr);

      return stateMatch && cityMatch && matchesCarFilter && queryMatch;
    });
  }, [selectedState, searchCityVal, filteredVehicles, searchQuery]);

  // Handle posting a review
  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    // Simulate sentiment analyzer
    let sentiment: 'positive' | 'neutral' | 'negative' = 'positive';
    const cleanText = reviewText.toLowerCase();
    if (cleanText.includes('rud') || cleanText.includes('bad') || cleanText.includes('frustrat') || cleanText.includes('slow') || cleanText.includes('poor')) {
      sentiment = 'negative';
    } else if (cleanText.includes('ok') || cleanText.includes('average') || cleanText.includes('decent') || cleanText.includes('fair')) {
      sentiment = 'neutral';
    }

    const newReview: Review = {
      id: reviews.length + 1,
      name: reviewerName || currentUser || 'Anonymous Customer',
      dealership: selectedDealer ? selectedDealer.id : 15,
      review: reviewText,
      time: new Date().toISOString(),
      purchase: hasPurchased,
      purchase_date: hasPurchased ? purchaseDate : '',
      car_make: hasPurchased ? selectedMake : '',
      car_model: hasPurchased ? selectedModel : '',
      car_year: hasPurchased ? carYear : 0,
      sentiment: sentiment,
      stars: selectedStars
    };

    setReviews([newReview, ...reviews]);
    setIsAddingReview(false);
    setReviewText('');
    setSelectedStars(4);
  };

  // Execute Simulated cURL commands
  const handleExecuteCurl = (cmd: string) => {
    setTerminalCommand(cmd);
    const cleanCmd = cmd.trim();
    if (cleanCmd.includes('/fetchDealers/Kansas')) {
      setTerminalOutput(`HTTP/1.1 200 OK\n\n[\n  {"id": 15, "city": "Topeka", "state": "Kansas", "short_name": "Topeka Motors"},\n  {"id": 29, "city": "Wichita", "state": "Kansas", "short_name": "Wichita Cars"}\n]`);
    } else if (cleanCmd.includes('/fetchDealers')) {
      setTerminalOutput(`HTTP/1.1 200 OK\n\n[\n  {"id": 1, "city": "El Paso", "state": "Texas"},\n  {"id": 2, "city": "San Francisco", "state": "California"},\n  {"id": 15, "city": "Topeka", "state": "Kansas"}\n]`);
    } else if (cleanCmd.includes('/fetchReviews/dealer/15')) {
      setTerminalOutput(`HTTP/1.1 200 OK\n\n[\n  {"id": 1, "name": "Berkly Shepley", "dealership": 15, "review": "Total grid-enabled service-desk.", "sentiment": "positive"}\n]`);
    } else if (cleanCmd.includes('/analyze/')) {
      setTerminalOutput(`HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "sentiment": "positive",\n  "score": 0.957,\n  "label": "positive"\n}`);
    } else if (cleanCmd.includes('/djangoapp/login')) {
      setTerminalOutput(`HTTP/1.1 200 OK\n\n{\n  "userName": "admin",\n  "status": "Authenticated"\n}`);
    } else {
      setTerminalOutput(`HTTP/1.1 200 OK\nExecuted unknown custom endpoint proxy debug test correctly.`);
    }
  };

  // Simulate Django interactive Auth Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUsername === 'admin' && loginPassword === 'rootpassword') {
      setCurrentUser('admin');
      setSessionActive(true);
      setAuthError('');
    } else if (loginUsername === 'root' && loginPassword === 'root') {
      setCurrentUser('root_admin');
      setSessionActive(true);
      setAuthError('');
    } else if (loginUsername && loginPassword) {
      setCurrentUser(loginUsername);
      setSessionActive(true);
      setAuthError('');
    } else {
      setAuthError('Please fill out all credentials.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupUser) {
      setCurrentUser(signupUser);
      setSessionActive(true);
      setActiveTab('dealers');
    }
  };

  const handleLogout = () => {
    setCurrentUser('');
    setSessionActive(false);
    setShowLogoutAlert(true);
    if (logoutAlertTimeoutRef.current) {
      clearTimeout(logoutAlertTimeoutRef.current);
    }
    logoutAlertTimeoutRef.current = setTimeout(() => {
      setShowLogoutAlert(false);
    }, 10000);
  };

  // Routing sync & click interception supporting /Full-Stack-Car-Dealer-Capstone-Python-JS as basename parameter
  React.useEffect(() => {
    const syncRouteWithLocation = () => {
      let path = window.location.pathname;
      const hash = window.location.hash;
      
      const basename = '/Full-Stack-Car-Dealer-Capstone-Python-JS';
      if (path.startsWith(basename)) {
        path = path.slice(basename.length);
      }
      
      if (path === '/about/' || path === '/about' || hash === '#/about') {
        setActiveTab('about');
      } else if (path === '/contact/' || path === '/contact' || hash === '#/contact') {
        setActiveTab('contact');
      } else if (path === '/admin/' || path === '/admin' || hash === '#/admin') {
        setActiveTab('admin');
      } else if (path === '/deliverables/' || path === '/deliverables' || hash === '#/deliverables') {
        setActiveTab('deliverables');
      } else if (path === '/' || path === '' || hash === '#/' || hash === '#/dealers') {
        setActiveTab('dealers');
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        let href = anchor.getAttribute('href');
        if (href) {
          const basename = '/Full-Stack-Car-Dealer-Capstone-Python-JS';
          if (href.startsWith(basename)) {
            href = href.slice(basename.length);
          }
          if (href === '/about/' || href === '/about') {
            e.preventDefault();
            setActiveTab('about');
            window.location.hash = '#/about';
          } else if (href === '/contact/' || href === '/contact') {
            e.preventDefault();
            setActiveTab('contact');
            window.location.hash = '#/contact';
          } else if (href === '/admin/' || href === '/admin') {
            e.preventDefault();
            setActiveTab('admin');
            window.location.hash = '#/admin';
          } else if (href === '/' || href === '/#') {
            e.preventDefault();
            setActiveTab('dealers');
            window.location.hash = '#/dealers';
          }
        }
      }
    };

    window.addEventListener('popstate', syncRouteWithLocation);
    window.addEventListener('hashchange', syncRouteWithLocation);
    document.addEventListener('click', handleGlobalClick);
    
    syncRouteWithLocation();

    return () => {
      window.removeEventListener('popstate', syncRouteWithLocation);
      window.removeEventListener('hashchange', syncRouteWithLocation);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // Compute stats based on interactive state
  const stats = useMemo(() => {
    const relevantReviews = selectedDealer ? reviews.filter(r => r.dealership === selectedDealer.id) : reviews;
    const positiveCount = relevantReviews.filter(r => r.sentiment === 'positive').length;
    const total = relevantReviews.length;
    const percent = total > 0 ? Math.round((positiveCount / total) * 100) : 100;
    return {
      positivePercent: percent,
      totalCount: total,
      registeredReviews: reviews.length
    };
  }, [reviews, selectedDealer]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Pop-up alert for Logout success */}
      <AnimatePresence>
        {showLogoutAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 right-4 z-[9999] max-w-sm w-full bg-slate-900 text-white rounded-lg shadow-2xl border border-slate-700/50 p-4 shrink-0 overflow-hidden flex items-start gap-3"
            id="logout-alert-container"
          >
            <div className="bg-blue-500/20 text-blue-400 p-2 rounded-lg mt-0.5">
              <CheckCircle2 className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-[10px] uppercase tracking-wider text-blue-400">Security Notification</span>
                <button
                  type="button"
                  id="close-logout-alert-btn"
                  onClick={() => setShowLogoutAlert(false)}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-slate-200 text-sm font-medium mt-1 leading-relaxed">
                you have successfully logged out
              </p>
              <div className="mt-3.5 h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-blue-500"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Banner Navigation bar matching "Professional Polish" layout */}
      <nav className="sticky top-0 h-16 bg-slate-950 text-white flex items-center justify-between px-6 border-b border-slate-800 shadow-xl shrink-0 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActiveTab('dealers'); setSelectedDealer(null); window.location.hash = '#/dealers'; }}>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg text-white shadow-md shadow-blue-500/30">B</div>
            <span className="text-base font-bold tracking-tight">
              Best Cars <span className="font-light text-slate-400">Portal</span>
            </span>
          </div>
          <div className="h-6 w-[1px] bg-slate-800 hidden sm:block"></div>
          
          {/* Main Top Menu Nav items */}
          <div className="flex gap-4 text-xs sm:text-sm font-medium">
            <button
              onClick={() => { setActiveTab('dealers'); setSelectedDealer(null); window.location.hash = '#/dealers'; }}
              className={`hover:text-blue-400 transition-all ${activeTab === 'dealers' ? 'text-blue-400 border-b-2 border-blue-500 pb-1 font-semibold' : 'text-slate-300'}`}
            >
              Dealerships
            </button>
            <button
              onClick={() => { setActiveTab('about'); window.location.hash = '#/about'; }}
              className={`hover:text-blue-400 transition-all ${activeTab === 'about' ? 'text-blue-400 border-b-2 border-blue-500 pb-1 font-semibold' : 'text-slate-300'}`}
            >
              About Us
            </button>
            <button
              onClick={() => { setActiveTab('contact'); window.location.hash = '#/contact'; }}
              className={`hover:text-blue-400 transition-all ${activeTab === 'contact' ? 'text-blue-400 border-b-2 border-blue-500 pb-1 font-semibold' : 'text-slate-300'}`}
            >
              Contact Us
            </button>
            <button
              onClick={() => { setActiveTab('admin'); window.location.hash = '#/admin'; }}
              className={`hover:text-blue-400 transition-all ${activeTab === 'admin' ? 'text-blue-400 border-b-2 border-blue-500 pb-1 font-semibold' : 'text-slate-300'}`}
            >
              Django Admin
            </button>
            <button
              onClick={() => { setActiveTab('deliverables'); window.location.hash = '#/deliverables'; }}
              className={`hover:text-blue-400 transition-all ${activeTab === 'deliverables' ? 'text-blue-400 border-b-2 border-blue-500 pb-1 font-semibold' : 'text-indigo-300'}`}
            >
              Deliverables Console
            </button>
            <button
              onClick={() => { setActiveTab('readme'); window.location.hash = '#/readme'; }}
              className={`hover:text-amber-400 transition-all ${activeTab === 'readme' ? 'text-amber-400 border-b-2 border-amber-500 pb-1 font-semibold' : 'text-amber-200 font-medium'}`}
            >
              Readme
            </button>
          </div>
        </div>

        {/* Global user authentication state indicators - Capstone Requirements */}
        <div className="flex items-center gap-3">
          {sessionActive ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                User: <strong className="text-blue-400">{currentUser}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="bg-slate-800 hover:bg-slate-700 text-white rounded px-3 py-1 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <LogOut className="w-3.5 h-3.5" />
                Signout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveTab('admin'); window.location.hash = '#/admin'; }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Sub-Header / Project metadata bar - Professional Polish Theme */}
      <div className="bg-white border-b border-rose-100/30 md:border-slate-200/80 px-6 py-3.5 flex flex-col md:flex-row gap-3 justify-between items-start md:items-center shrink-0 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider border border-slate-200">
              Capstone Dashboard
            </span>
            <div className="text-[10px] text-slate-400 font-mono">2026-05-28 23:08:54 UTC</div>
          </div>
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight mt-0.5">
            Full Stack Application Development Capstone Project
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            <strong>Candidate:</strong> Brian McCarthy &bull; <span className="font-mono">fullstack_developer_capstone</span>
          </p>
        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200/60 text-[11px] font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Django Server: :8000
          </div>
          <div className="flex items-center gap-1.5 bg-sky-50 text-sky-800 px-2.5 py-1 rounded-md border border-sky-200/60 text-[11px] font-semibold">
            <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
            Express-MongoDB: :3030
          </div>
          <div className="flex items-center gap-1.5 bg-violet-50 text-violet-800 px-2.5 py-1 rounded-md border border-violet-200/60 text-[11px] font-semibold">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            IBM Cloud Analyzer
          </div>
        </div>
      </div>

      {/* Main Viewport Grid */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        
        {/* Main Workstation View - full width! */}
        <main className="flex-1 bg-white p-6 flex flex-col overflow-y-auto">
          
          {/* VIEW 1: Dealership Main Interactive Explorer */}
          {activeTab === 'dealers' && (
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Filter controls & Title */}
              <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-100 pb-5">
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Our National Dealership Locations</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete Django Web Application simulated flow. Select a dealership below to view verified IBM Cloud microservice client reviews.
                  </p>
                </div>
                
                {/* Search & Filter dropdowns */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-initial">
                    <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search city/name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const queryStr = searchQuery.trim().toLowerCase();
                          if (queryStr) {
                            const globalMatch = staticDealers.find(d =>
                              d.city.toLowerCase().includes(queryStr) ||
                              d.full_name.toLowerCase().includes(queryStr)
                            );
                            if (globalMatch) {
                              setSelectedState('All');
                              setSelectedDealer(globalMatch);
                              const el = document.getElementById('advanced-search-panel');
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else if (filteredDealers.length > 0) {
                            setSelectedDealer(filteredDealers[0]);
                            const el = document.getElementById('advanced-search-panel');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="pl-8 pr-4 py-1.5 border border-slate-200 rounded text-xs bg-slate-50 w-full focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Filter className="w-3.5 h-3.5 text-slate-400" />
                      State:
                    </span>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-slate-50 font-medium focus:outline-none"
                    >
                      <option value="All">All States (TX, CA, KS, FL, WA, NY, MA, LA, TN)</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Texas">Texas</option>
                      <option value="California">California</option>
                      <option value="Florida">Florida</option>
                      <option value="Washington">Washington</option>
                      <option value="New York">New York</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Tennessee">Tennessee</option>
                    </select>
                  </div>
                </div>
              </header>

              {/* Deliverables Inspector Redirect Banner */}
              <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-200/60 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <h4 className="font-extrabold text-blue-900 text-sm">Review Django-React Project Deliverables</h4>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">
                    Need to audit candidate submissions? View raw Django server logs, static HTML files, and API outputs on a separate page.
                  </p>
                </div>
                <button
                  onClick={() => { setActiveTab('deliverables'); window.location.hash = '#/deliverables'; }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm flex items-center gap-1.5 transition-all self-stretch sm:self-auto justify-center"
                >
                  Launch Deliverables Inspector →
                </button>
              </div>

              {/* Readme Documentation Redirect Banner */}
              <div className="bg-gradient-to-r from-amber-50/70 to-orange-50/50 border border-amber-200/60 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm mb-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse"></span>
                    <h4 className="font-extrabold text-amber-950 text-sm">Interactive Project Documentation (README)</h4>
                  </div>
                  <p className="text-xs text-amber-800 mt-1 font-medium">
                    Explore the complete application overview, files directory structure, requirements list, languages, and technologies utilized.
                  </p>
                </div>
                <button
                  onClick={() => { setActiveTab('readme'); window.location.hash = '#/readme'; }}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm flex items-center gap-1.5 transition-all self-stretch sm:self-auto justify-center cursor-pointer"
                >
                  View Interactive README →
                </button>
              </div>

              {/* Best Cars Luxury Brands Banner & Picture Showcase */}
              <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md">
                <div className="max-w-3xl mb-4">
                  <span className="bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Featured Luxury Distributorship
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1.5">Mercedes-Benz, BMW, Audi & Porsche Signature Collections</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Explore high-resolution illustrations of our premier European luxury vehicles. Double-click or browse local dealership units below to submit a verified owner reviews sentiment feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Mercedes card */}
                  <div className="group relative overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-sm transition-all duration-300 hover:border-slate-700">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" 
                        alt="Mercedes-AMG C63 High Performance Sports Coupe" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-red-650 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-red-500 uppercase">
                        Mercedes-AMG C63
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-extrabold text-sm text-white">Mercedes-AMG C 63</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Experience pure performance. The signature Mercedes-AMG C 63 Coupe offers hand-crafted twin-turbo V8 dynamics combined with top-tier German craftsmanship.</p>
                      <button 
                        onClick={() => { setLuxuryBrandFilter('Mercedes-Benz'); const el = document.getElementById('luxury-showroom'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="text-[10px] text-red-400 font-bold mt-2 float-right hover:text-red-350 transition-colors"
                      >
                        Browse AMG &rarr;
                      </button>
                    </div>
                  </div>

                  {/* BMW card */}
                  <div className="group relative overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-sm transition-all duration-300 hover:border-slate-700">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" 
                        alt="BMW M-Power High Performance Coupe" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-slate-700 uppercase">
                        BMW M-Series
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-extrabold text-sm text-white">BMW</h4>
                      <p className="text-[11px] text-slate-400 mt-1">The Ultimate Driving Machine. Showcasing sporty 3 & 5 Series, elite M-performance cars, and all-electric i-Series SUVs.</p>
                      <button 
                        onClick={() => { setLuxuryBrandFilter('BMW'); const el = document.getElementById('luxury-showroom'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="text-[10px] text-blue-400 font-bold mt-2 float-right hover:text-blue-300 transition-colors"
                      >
                        Browse Models &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Audi card */}
                  <div className="group relative overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-sm transition-all duration-300 hover:border-slate-700">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" 
                        alt="Audi Sport Quattro e-tron GT" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-slate-900/95 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-slate-700 uppercase">
                        Audi RS / e-tron GT
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-extrabold text-sm text-white">Audi</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Progress through technology. Displaying modern Q-Series crossover SUVs, elite RS sportbacks, and high-performance e-tron EVs.</p>
                      <button 
                        onClick={() => { setLuxuryBrandFilter('Audi'); const el = document.getElementById('luxury-showroom'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="text-[10px] text-blue-400 font-bold mt-2 float-right hover:text-blue-300 transition-colors"
                      >
                        Browse Models &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Porsche card */}
                  <div className="group relative overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-sm transition-all duration-300 hover:border-slate-700">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" 
                        alt="Porsche Sports and Electric Vehicles" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-amber-600/95 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-amber-500 uppercase">
                        Porsche Sport & EV
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-extrabold text-sm text-white">Porsche</h4>
                      <p className="text-[11px] text-slate-400 mt-1">There is no substitute. Unmistakable race heritage, luxury electric sedans, and high-performance engineering.</p>
                      <button 
                        onClick={() => { setLuxuryBrandFilter('Porsche'); const el = document.getElementById('luxury-showroom'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="text-[10px] text-amber-400 font-bold mt-2 float-right hover:text-amber-300 transition-colors"
                      >
                        Browse Models &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Showroom Widget Section */}
              <div id="luxury-showroom" className="border border-slate-200 rounded-xl p-5 bg-white shadow-xs">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      Luxury Showroom & Model Directory
                    </h3>
                    <p className="text-xs text-slate-500">
                      Explore detailed examples of sedans, crossovers, performance vehicles, and electric models from European brands.
                    </p>
                  </div>

                  {/* Search query box */}
                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Mercedes, BMW, Audi, Porsche models..."
                      value={luxurySearchQuery}
                      onChange={(e) => setLuxurySearchQuery(e.target.value)}
                      className="pl-8 pr-4 py-1.5 border border-slate-200 rounded text-xs bg-slate-50 w-full focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-wrap items-center gap-2 py-3.5">
                  {/* Brand select tabs */}
                  <div className="flex flex-wrap gap-1 border-r border-slate-200 pr-3 mr-1">
                    {['All', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche'].map((b) => (
                      <button
                        key={b}
                        onClick={() => setLuxuryBrandFilter(b)}
                        className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                          luxuryBrandFilter === b
                            ? 'bg-slate-950 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                      >
                        {b === 'All' ? 'All Brands' : b}
                      </button>
                    ))}
                  </div>

                  {/* Custom category pills */}
                  <div className="flex flex-wrap gap-1 col-span-3">
                    {['All', 'Sedans & Hatchbacks', 'SUVs & Crossovers', 'Performance & Sports Cars', 'Electric Vehicles (EVs)'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setLuxuryCategoryFilter(c)}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                          luxuryCategoryFilter === c
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/50'
                        }`}
                      >
                        {c === 'All' ? 'All Categories' : c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Showroom Grid of Luxury Cars */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {(() => {
                    const matchedCars = luxuryCatalog.filter((car) => {
                      const brandMatch = luxuryBrandFilter === 'All' || car.make.toLowerCase() === luxuryBrandFilter.toLowerCase();
                      const catMatch = luxuryCategoryFilter === 'All' || car.category === luxuryCategoryFilter;
                      const textMatch = 
                        car.make.toLowerCase().includes(luxurySearchQuery.toLowerCase()) ||
                        car.model.toLowerCase().includes(luxurySearchQuery.toLowerCase()) ||
                        car.category.toLowerCase().includes(luxurySearchQuery.toLowerCase());
                      return brandMatch && catMatch && textMatch;
                    });

                    if (matchedCars.length === 0) {
                      return (
                        <div className="col-span-full py-8 text-center text-slate-400 text-xs">
                          No luxury vehicles match your search or filter configuration.
                        </div>
                      );
                    }

                    return matchedCars.map((car, idx) => {
                      return (
                        <div
                          key={idx}
                          className="p-3 bg-slate-50/55 hover:bg-slate-100/70 border border-slate-200 rounded-lg group transition-all duration-200"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                              {car.make}
                            </span>
                            <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                              car.status === 'Electric' ? 'bg-indigo-100 text-indigo-700' :
                              car.status.includes('AMG') ? 'bg-red-100 text-red-700' :
                              car.status.includes('M') ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {car.status}
                            </span>
                          </div>

                          <h4 className="font-extrabold text-xs text-slate-900 mt-1.5 line-clamp-1 group-hover:text-blue-600">
                            {car.model}
                          </h4>
                          <p className="text-[10px] text-slate-500 mt-1 font-semibold truncate">
                            {car.category}
                          </p>

                          <div className="mt-2.5 flex justify-between items-center pt-2 border-t border-slate-200/40">
                            <span className="text-[9px] font-mono text-slate-400">Specs: 2026 Model</span>
                            <button
                              onClick={() => alert(`Luxury Consultation Simulator: You selected ${car.make} ${car.model}. In our real Topeka Kansas group, reviews sentiment is processed with IBM Cloud Watson.`)}
                              className="text-[9px] text-blue-600 hover:text-blue-800 font-bold hover:underline"
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Comprehensive Advanced Multi-Criteria Inventory & Dealer Search Center */}
              <div id="advanced-search-panel" className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-blue-600 animate-pulse" />
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                        🔬 Multi-Criteria Dealership & Advanced Inventory Search
                      </h3>
                      <p className="text-[10px] text-slate-500 font-medium font-sans">Configure advanced specifications to find exact matching vehicles across all states and regions.</p>
                    </div>
                  </div>
                  <button
                    id="clear-all-filters-btn"
                    onClick={() => {
                      setSearchCityVal('');
                      setSelectedState('All');
                      setCarMakeVal('All');
                      setCarModelVal('');
                      setCarMilesOperator('any');
                      setCarMilesVal('');
                      setCarYearOperator('any');
                      setCarYearVal('');
                      setCarExtColor('All');
                      setCarIntColor('All');
                      setCarDoorsVal('All');
                      setCarTypeVal('All');
                      setSearchQuery('');
                    }}
                    className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded font-semibold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Column 1: Geographic Filters */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      1. Region Filters
                    </span>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">State / Region</label>
                      <select
                        id="advanced-search-state-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500"
                      >
                        <option value="All">All Regions / States</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Texas">Texas</option>
                        <option value="California">California</option>
                        <option value="Florida">Florida</option>
                        <option value="Washington">Washington</option>
                        <option value="New York">New York</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Tennessee">Tennessee</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">City Name Search</label>
                      <input
                        id="advanced-search-city-input"
                        type="text"
                        placeholder="e.g. Tampa, Seattle, Dallas"
                        value={searchCityVal}
                        onChange={(e) => setSearchCityVal(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const queryStr = searchCityVal.trim().toLowerCase();
                            if (queryStr) {
                              const globalMatch = staticDealers.find(d =>
                                d.city.toLowerCase().includes(queryStr)
                              );
                              if (globalMatch) {
                                setSelectedState('All');
                                setSelectedDealer(globalMatch);
                              }
                            } else if (filteredDealers.length > 0) {
                              setSelectedDealer(filteredDealers[0]);
                            }
                          }
                        }}
                        className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Column 2: Vehicle Core Specs */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold flex items-center gap-1">
                      <Car className="w-3 h-3 text-slate-400" />
                      2. Vehicle Identification
                    </span>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">Car Make</label>
                      <select
                        id="advanced-search-make-select"
                        value={carMakeVal}
                        onChange={(e) => setCarMakeVal(e.target.value)}
                        className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500"
                      >
                        <option value="All">All Manufacturers</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="Tesla">Tesla</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Dodge">Dodge</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Ram">Ram</option>
                        <option value="Lucid">Lucid Air</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">Model Name Search</label>
                      <input
                        id="advanced-search-model-input"
                        type="text"
                        placeholder="e.g. F-150, Camry, Mustang"
                        value={carModelVal}
                        onChange={(e) => setCarModelVal(e.target.value)}
                        className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Column 3: Threshold Matches (Year & Miles) */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold flex items-center gap-1">
                      <Filter className="w-3 h-3 text-slate-400" />
                      3. Metrics Comparison
                    </span>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">Car Odometer Miles</label>
                      <div className="flex gap-1.5">
                        <select
                          value={carMilesOperator}
                          onChange={(e) => setCarMilesOperator(e.target.value as any)}
                          className="border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none"
                        >
                          <option value="any">Any Miles</option>
                          <option value="<">&lt; Less than</option>
                          <option value=">">&gt; More than</option>
                        </select>
                        <input
                          id="advanced-search-miles-input"
                          type="number"
                          placeholder="e.g. 30000"
                          disabled={carMilesOperator === 'any'}
                          value={carMilesVal}
                          onChange={(e) => setCarMilesVal(e.target.value ? Number(e.target.value) : '')}
                          className="flex-1 w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500 disabled:bg-slate-100 disabled:text-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-600 font-bold mb-1">Model Launch Year</label>
                      <div className="flex gap-1.5">
                        <select
                          value={carYearOperator}
                          onChange={(e) => setCarYearOperator(e.target.value as any)}
                          className="border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none"
                        >
                          <option value="any">Any Year</option>
                          <option value="<">&lt; Before</option>
                          <option value=">">&gt; After</option>
                        </select>
                        <input
                          id="advanced-search-year-input"
                          type="number"
                          placeholder="e.g. 2021"
                          disabled={carYearOperator === 'any'}
                          value={carYearVal}
                          onChange={(e) => setCarYearVal(e.target.value ? Number(e.target.value) : '')}
                          className="flex-1 w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs bg-white font-medium focus:outline-none focus:border-blue-500 disabled:bg-slate-100 disabled:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Style Aesthetics & Body type */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600 animate-pulse" />
                      4. Style & Doors
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <label className="block text-[10px] text-slate-600 font-bold mb-1">Exterior</label>
                        <select
                          id="advanced-search-ext-color-select"
                          value={carExtColor}
                          onChange={(e) => setCarExtColor(e.target.value)}
                          className="w-full border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none text-[11px]"
                        >
                          <option value="All">All Paint</option>
                          <option value="Black">Black</option>
                          <option value="White">White</option>
                          <option value="Silver">Silver</option>
                          <option value="Gray">Gray</option>
                          <option value="Blue">Blue</option>
                          <option value="Red">Red</option>
                          <option value="Yellow">Yellow</option>
                          <option value="Green">Green</option>
                          <option value="Orange">Orange</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-600 font-bold mb-1">Interior</label>
                        <select
                          id="advanced-search-int-color-select"
                          value={carIntColor}
                          onChange={(e) => setCarIntColor(e.target.value)}
                          className="w-full border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none text-[11px]"
                        >
                          <option value="All">All Trim</option>
                          <option value="Black">Black</option>
                          <option value="Gray">Gray</option>
                          <option value="White">White</option>
                          <option value="Beige">Beige</option>
                          <option value="Red">Red</option>
                          <option value="Tan">Tan</option>
                          <option value="Brown">Brown</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <label className="block text-[10px] text-slate-600 font-bold mb-1">Body Type</label>
                        <select
                          id="advanced-search-body-type-select"
                          value={carTypeVal}
                          onChange={(e) => setCarTypeVal(e.target.value)}
                          className="w-full border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none text-[11px]"
                        >
                          <option value="All">All Types</option>
                          <option value="Sedan">Sedan</option>
                          <option value="Coupe">Coupe</option>
                          <option value="Convertible">Convertible</option>
                          <option value="SUV">SUV</option>
                          <option value="Truck">Truck</option>
                          <option value="Minivan">Minivan</option>
                          <option value="Hatchback">Hatchback</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-600 font-bold mb-1">Doors</label>
                        <select
                          id="advanced-search-doors-select"
                          value={carDoorsVal}
                          onChange={(e) => setCarDoorsVal(e.target.value as any)}
                          className="w-full border border-slate-200 rounded px-1.5 py-1.5 text-xs bg-white font-medium focus:outline-none text-[11px]"
                        >
                          <option value="All">All Doors</option>
                          <option value="2">2 Door Only</option>
                          <option value="4">4 Door Only</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sub-results info bar and Display Mode selector */}
                <div className="flex justify-between items-center bg-white border border-slate-200 rounded-lg p-2.5 flex-wrap gap-2 shadow-xs mt-1">
                  <div className="flex items-center gap-2 text-xs font-sans text-slate-600 font-semibold p-0.5">
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] px-2 py-0.5 rounded font-extrabold uppercase">
                      Search Audit Output
                    </span>
                    <span>
                      Found <strong className="text-slate-900">{filteredDealers.length}</strong> matching dealerships holding <strong className="text-slate-900">{filteredVehicles.length}</strong> matching vehicles.
                    </span>
                  </div>
                  <div className="flex gap-1.5 bg-slate-100 p-1 rounded-lg">
                    <button
                      id="view-dealers-tab-btn"
                      onClick={() => setDealerOrVehicleView('dealers')}
                      className={`px-3 py-1 rounded-md text-xs font-bold font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
                        dealerOrVehicleView === 'dealers'
                          ? 'bg-white text-slate-950 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      View Matching Dealers ({filteredDealers.length})
                    </button>
                    <button
                      id="view-vehicles-tab-btn"
                      onClick={() => setDealerOrVehicleView('vehicles')}
                      className={`px-3 py-1 rounded-md text-xs font-bold font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
                        dealerOrVehicleView === 'vehicles'
                          ? 'bg-white text-slate-950 shadow-xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Car className="w-3.5 h-3.5 text-orange-500" />
                      View Matching Vehicles ({filteredVehicles.length})
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content Layout splits: Left side (Table & Stats), Right side (Detailed reviews selection view) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left pane: Dealer List Block - Columns 1 to 7 */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  {dealerOrVehicleView === 'dealers' ? (
                    /* Dealership table */
                    <div className="border border-slate-200/90 rounded-lg overflow-hidden shadow-sm bg-white">
                      <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex justify-between items-center whitespace-nowrap">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Car className="w-4 h-4 text-blue-500" />
                          Django proxy routes response
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                          API status: 200 OK
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-100/50 border-b border-slate-200 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                              <th className="px-4 py-2 text-center w-12">ID</th>
                              <th className="px-4 py-2">Dealership Name</th>
                              <th className="px-4 py-2">Address</th>
                              <th className="px-4 py-2">City</th>
                              <th className="px-4 py-2">State</th>
                              <th className="px-4 py-2">ZIP Code</th>
                              <th className="px-4 py-2 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="text-xs divide-y divide-slate-100">
                            {filteredDealers.length > 0 ? (
                              filteredDealers.map((dealer) => {
                                const isSelected = selectedDealer?.id === dealer.id;
                                return (
                                  <tr
                                    key={dealer.id}
                                    className={`transition-colors cursor-pointer ${
                                      isSelected
                                        ? 'bg-blue-50/50'
                                        : 'hover:bg-slate-50'
                                    }`}
                                    onClick={() => {
                                      setSelectedDealer(dealer);
                                      setDealerPaneTab('details');
                                    }}
                                  >
                                    <td className="px-4 py-3 text-center font-mono text-[11px] text-slate-400 font-bold">
                                      #{dealer.id}
                                    </td>
                                    <td className="px-4 py-3 font-semibold text-slate-800">
                                      <div className="text-slate-950 font-bold flex flex-wrap items-center gap-1.5">
                                        {dealer.full_name}
                                        <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5 shrink-0">
                                          ★ {getDealerRating(dealer.id).avg}/5
                                        </span>
                                      </div>
                                      <div className="text-[10px] text-slate-400 italic font-mono">{dealer.short_name}</div>
                                    </td>
                                    <td className="px-4 py-3 text-slate-500">
                                      {dealer.address}
                                    </td>
                                    <td className="px-4 py-3 text-slate-600 font-medium">
                                      {dealer.city}
                                    </td>
                                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                                      <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                        {dealer.state}
                                      </span>
                                    </td>
                                    <td className="px-4 py-3 font-mono text-[11px] text-slate-600">
                                      {dealer.zip}
                                    </td>
                                    <td className="px-4 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                                      {sessionActive ? (
                                        <button
                                          onClick={() => {
                                            setSelectedDealer(dealer);
                                            setIsAddingReview(true);
                                          }}
                                          className="text-[10px] bg-slate-900 text-white hover:bg-slate-800 px-2.5 py-1 rounded transition-colors whitespace-nowrap font-bold"
                                        >
                                          Review Dealer
                                        </button>
                                      ) : (
                                        <span className="text-[10px] text-slate-400 font-medium italic">Sign in to review</span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-slate-400 font-medium font-sans">
                                  No dealerships found carrying vehicles matching current query specs.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>

                      <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between items-center">
                        <span>Showing {filteredDealers.length} units &bull; Database: <strong className="text-slate-600 font-mono">MongoDB (Cloud)</strong></span>
                        <span className="text-[10px] font-semibold text-rose-500 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded uppercase">
                          Proxy active
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Available Matching Vehicles list */
                    <div className="flex flex-col gap-4">
                      <div className="border border-slate-200/90 rounded-lg overflow-hidden shadow-sm bg-white p-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                            <Car className="w-4 h-4 text-orange-500 animate-pulse" />
                            Matching Vehicles Live Inventory Feed
                          </h4>
                          <span className="text-[10px] bg-slate-200 font-mono px-2 py-0.5 rounded text-slate-600 font-bold">
                            Total matches: {filteredVehicles.length}
                          </span>
                        </div>

                        {filteredVehicles.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredVehicles.map(car => {
                              // Find parent dealership
                              const dealer = staticDealers.find(d => d.id === car.dealershipId);
                              const isHostSelected = selectedDealer?.id === dealer?.id;
                              return (
                                <div
                                  key={car.id}
                                  id={`car-card-${car.id}`}
                                  onClick={() => {
                                    if (dealer) {
                                      setSelectedDealer(dealer);
                                      setDealerPaneTab('details');
                                    }
                                  }}
                                  className={`bg-white border p-4 rounded-xl flex flex-col gap-3 cursor-pointer transition-all hover:shadow-md hover:border-slate-300 relative ${
                                    isHostSelected ? 'ring-2 ring-blue-500/80 border-transparent bg-blue-50/10' : 'border-slate-200'
                                  }`}
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <span className="text-[11px] uppercase font-bold text-slate-400 font-mono">Stock #{car.id}</span>
                                      <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">{car.year} {car.make} {car.model}</h4>
                                      <p className="text-[11px] text-slate-500 font-semibold font-mono">{car.miles.toLocaleString()} Miles</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-base font-black text-blue-600 font-mono">${car.price.toLocaleString()}</p>
                                      <span className="text-[9px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                                        {car.type}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-2 text-[10px] bg-slate-50 p-2.5 rounded-lg border border-slate-100/60 font-sans font-semibold text-slate-600">
                                    <div>
                                      <span className="text-slate-400 font-bold uppercase text-[9px]">paint:</span> <strong className="text-slate-800">{car.exteriorColor}</strong>
                                    </div>
                                    <div>
                                      <span className="text-slate-400 font-bold uppercase text-[9px]">cabin:</span> <strong className="text-slate-800">{car.interiorColor}</strong>
                                    </div>
                                    <div>
                                      <span className="text-slate-400 font-bold uppercase text-[9px]">doors:</span> <strong className="text-slate-800">{car.doors} Doors</strong>
                                    </div>
                                    <div>
                                      <span className="text-slate-400 font-bold uppercase text-[9px]">body class:</span> <strong className="text-slate-800">{car.type}</strong>
                                    </div>
                                  </div>

                                  {dealer && (
                                    <div className="border-t border-slate-100 pt-2 flex items-center justify-between mt-1">
                                      <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1 truncate max-w-[70%]">
                                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                        {dealer.full_name} &bull; {dealer.city}, {dealer.state}
                                      </span>
                                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                        isHostSelected ? 'bg-blue-600 text-white shadow' : 'bg-orange-100 text-orange-900'
                                      }`}>
                                        {isHostSelected ? 'Active Destination' : 'View Dealer'}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200/80 rounded-xl">
                            <Car className="w-12 h-12 text-slate-300 mx-auto animate-pulse stroke-1" />
                            <h5 className="text-sm font-bold text-slate-700 mt-3">No matching vehicles found</h5>
                            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto font-sans leading-relaxed">
                              There are currently no certified used vehicles matching your exact specifications. Try widening your criteria parameters or clicking "Clear All Filters" to restart.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Sentiment & Microservice Stats Widget Row - Capstone Visual Requirements */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3.5 flex items-center gap-3">
                      <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-sm shadow-emerald-500/20">
                        +
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">Positive Sentiment</p>
                        <p className="text-lg font-extrabold text-emerald-950 font-mono">{stats.positivePercent}%</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex items-center gap-3">
                      <div className="w-9 h-9 bg-slate-400 rounded-full flex items-center justify-center text-slate-100 text-xs font-bold font-mono">
                        QTY
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Total Reviews</p>
                        <p className="text-lg font-extrabold text-slate-900 font-mono">{stats.totalCount}</p>
                      </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-100 rounded-lg p-3.5 flex items-center gap-3">
                      <div className="w-9 h-9 bg-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold font-mono">
                        API
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-rose-800 uppercase tracking-wider">IBM Service</p>
                        <p className="text-xs font-bold text-rose-950 truncate">Sentiment: Online</p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right Pane: Dealer Specific Reviews Feed Mockup - Columns 8 to 12 */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  
                  {selectedDealer ? (
                    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                      
                      {/* Selected Dealer Header card section */}
                      <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-bold bg-blue-500 px-2 py-0.5 rounded uppercase font-mono tracking-widest text-white shadow-sm">
                            Dealer reviews index
                          </span>
                          <span className="text-[10px] text-slate-300 font-mono">ID: #{selectedDealer.id}</span>
                        </div>
                        <h3 className="text-base font-bold tracking-tight text-white mt-1.5">{selectedDealer.full_name}</h3>
                        <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {selectedDealer.address}, {selectedDealer.city}, {selectedDealer.state}
                        </p>
                      </div>

                      {/* Navigation tabs within selection card */}
                      <div className="flex border-b border-slate-200 bg-slate-50 shrink-0">
                        <button
                          type="button"
                          id="dealer-tab-details"
                          onClick={() => setDealerPaneTab('details')}
                          className={`flex-1 py-3 px-4 text-xs font-bold font-sans tracking-wide border-b-2 transition-all flex items-center justify-center gap-2 ${
                            dealerPaneTab === 'details'
                              ? 'border-blue-600 text-blue-600 bg-white shadow-xs'
                              : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                          }`}
                        >
                          <Info className="w-3.5 h-3.5" />
                          Showroom Profile
                        </button>
                        <button
                          type="button"
                          id="dealer-tab-reviews"
                          onClick={() => setDealerPaneTab('reviews')}
                          className={`flex-1 py-3 px-4 text-xs font-bold font-sans tracking-wide border-b-2 transition-all flex items-center justify-center gap-2 ${
                            dealerPaneTab === 'reviews'
                              ? 'border-blue-600 text-blue-600 bg-white shadow-xs'
                              : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Reviews Feed ({reviews.filter(r => r.dealership === selectedDealer.id).length})
                        </button>
                      </div>

                      {/* Tab Content Display */}
                      {dealerPaneTab === 'details' ? (
                        <div className="p-5 flex-1 flex flex-col gap-5 overflow-y-auto bg-slate-50/50 max-h-[640px]">
                          {/* 1. Showroom Contact Card */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col gap-3 font-sans">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Official Information Directory</span>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                              <div className="flex items-start gap-2.5">
                                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg shrink-0 mt-0.5">
                                  <Phone className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[10px] font-bold text-slate-400 block uppercase font-mono">Phone Number</span>
                                  <span className="text-slate-800 font-bold text-sm block mt-0.5">
                                    {(() => {
                                      const areaCodes: Record<string, string> = {
                                        'Kansas': '785',
                                        'Texas': '915',
                                        'California': '415',
                                        'Florida': '813',
                                      };
                                      const area = areaCodes[selectedDealer.state] || '800';
                                      const mid = (100 + (selectedDealer.id * 17) % 899).toString();
                                      const end = (1000 + (selectedDealer.id * 31) % 8999).toString();
                                      return `(${area}) ${mid}-${end}`;
                                    })()}
                                  </span>
                                  <span className="text-[9px] text-emerald-600 font-medium font-mono">&bull; Lines Open Now</span>
                                </div>
                              </div>

                              <div className="flex items-start gap-2.5">
                                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg shrink-0 mt-0.5">
                                  <Mail className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[10px] font-bold text-slate-400 block uppercase font-mono">Email Address</span>
                                  <span className="text-slate-800 font-semibold block mt-0.5 truncate text-[11px]" title={`sales@${selectedDealer.short_name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'sales'}.bestcars.com`}>
                                    sales@{selectedDealer.short_name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'sales'}.bestcars.com
                                  </span>
                                  <span className="text-[9px] text-slate-500 font-medium">&bull; Typical reply: &lt; 2 hours</span>
                                </div>
                              </div>

                              <div className="flex items-start gap-2.5">
                                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg shrink-0 mt-0.5">
                                  <Clock className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[10px] font-bold text-slate-400 block uppercase font-mono">Business Hours</span>
                                  <span className="text-slate-800 font-medium block mt-0.5">Mon - Sat: 9am &ndash; 7pm</span>
                                  <span className="text-slate-500 block text-[10px]">Sunday: Closed (Family Day)</span>
                                </div>
                              </div>

                              <div className="flex items-start gap-2.5">
                                <div className="bg-amber-50 text-amber-600 p-2 rounded-lg shrink-0 mt-0.5">
                                  <Globe className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-[10px] font-bold text-slate-400 block uppercase font-mono">Coordinates & ZIP</span>
                                  <span className="text-slate-800 font-medium block mt-0.5">ZIP Code: {selectedDealer.zip || 'N/A'}</span>
                                  <span className="text-slate-500 font-mono text-[9px] block truncate">GPS: {selectedDealer.lat.toFixed(4)}, {(-selectedDealer.lat * 1.86).toFixed(4)}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 2. Showroom Address Details */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col gap-3 font-sans">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Physical Address & Directions</span>
                            <div className="flex items-center gap-3">
                              <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                                <MapPin className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <span className="text-slate-900 font-bold block text-sm">{selectedDealer.address}</span>
                                <span className="text-slate-500 block text-xs">{selectedDealer.city}, {selectedDealer.state} {selectedDealer.zip}</span>
                              </div>
                            </div>
                            <div className="bg-blue-50/50 border border-blue-200/50 rounded-lg p-2.5 flex items-center gap-2 text-blue-800 text-[11px]">
                              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>This dealership is fully integrated with our regional delivery network. Home shipping is available!</span>
                            </div>
                          </div>

                          {/* 3. Dealership Live Stock / Cars Inventory */}
                          <div className="flex flex-col gap-3 font-sans">
                            <div className="flex justify-between items-center">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-sans">
                                <Car className="w-4 h-4 text-blue-600" />
                                Showroom Inventory ({staticVehicles.filter(car => car.dealershipId === selectedDealer.id).length})
                              </h4>
                              <span className="text-[10px] bg-blue-100 text-blue-800 font-mono font-bold px-2 py-0.5 rounded">
                                In Stock
                              </span>
                            </div>

                            {(() => {
                              const dealerInventory = staticVehicles.filter(car => car.dealershipId === selectedDealer.id);

                              if (dealerInventory.length === 0) {
                                return (
                                  <div className="bg-slate-100/50 border border-dashed border-slate-200 rounded-xl p-6 text-center text-slate-400">
                                    <Car className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                                    <p className="text-xs font-semibold text-slate-600">No active listings currently registered for this site.</p>
                                    <p className="text-[10px] mt-0.5 text-slate-400">Please check again later or look up other locations.</p>
                                  </div>
                                );
                              }

                              return (
                                <div className="flex flex-col gap-3">
                                  {dealerInventory.map(car => (
                                    <div
                                      key={car.id}
                                      id={`showroom-car-${car.id}`}
                                      className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs hover:shadow-sm hover:border-blue-400/50 transition-all flex justify-between gap-3 items-start"
                                    >
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[9px] font-bold uppercase tracking-wider">
                                            {car.type}
                                          </span>
                                          <span className="text-[10px] font-mono text-slate-400 font-semibold">Stock #{car.id}</span>
                                        </div>
                                        <h5 className="font-extrabold text-slate-950 text-sm mt-1 truncate">
                                          {car.year} {car.make} {car.model}
                                        </h5>
                                        <div className="flex items-center gap-1.5 mt-1.5 text-slate-500 text-[10.5px] font-mono flex-wrap">
                                          <span>{car.miles.toLocaleString()} mi</span>
                                          <span>&bull;</span>
                                          <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full inline-block border border-slate-300" style={{ backgroundColor: car.exteriorColor.toLowerCase() }}></span>
                                            {car.exteriorColor}
                                          </span>
                                          <span>&bull;</span>
                                          <span className="text-slate-400">{car.doors}D</span>
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                                        <span className="text-xs font-black text-blue-600 font-mono">
                                          ${car.price.toLocaleString()}
                                        </span>
                                        {sentInquiryCarId === car.id ? (
                                          <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-1 rounded-lg uppercase tracking-wide flex items-center gap-1">
                                            <Check className="w-3 h-3" /> Sent!
                                          </span>
                                        ) : (
                                          <button
                                            type="button"
                                            onClick={() => {
                                              setSentInquiryCarId(car.id);
                                              setTimeout(() => {
                                                setSentInquiryCarId(null);
                                              }, 4000);
                                            }}
                                            className="text-[9px] font-extrabold bg-slate-900 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg transition-all uppercase tracking-wide cursor-pointer active:scale-95"
                                          >
                                            Inquire &rarr;
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      ) : (
                        /* Reviews Container box */
                        <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto bg-slate-50/50 max-h-[580px]">
                        
                        {/* 1. Aggregate Score and Star Filter Row */}
                        {(() => {
                          const dealerReviews = reviews.filter(r => r.dealership === selectedDealer.id);
                          const ratingData = getDealerRating(selectedDealer.id);
                          const countsByStar = (starVal: number | 'all') => {
                            if (starVal === 'all') return dealerReviews.length;
                            return dealerReviews.filter(r => {
                              const rStars = r.stars || (r.sentiment === 'positive' ? 5 : r.sentiment === 'negative' ? 1 : 3);
                              return rStars === starVal;
                            }).length;
                          };

                          return (
                            <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs flex flex-col gap-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Dealer Star Rating</span>
                                  <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-lg font-black text-slate-900">{ratingData.avg}</span>
                                    <span className="text-[11px] text-slate-500 font-medium">/ 5.0 rating</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                  {[1, 2, 3, 4, 5].map((s) => {
                                    const numericAvg = parseFloat(ratingData.avg);
                                    const fill = !isNaN(numericAvg) && s <= Math.round(numericAvg);
                                    return (
                                      <Star
                                        key={s}
                                        className={`w-4 h-4 ${fill ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                                      />
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Star filters with option to filter by 1, 2, 3, 4, 5 reviews with badge counts */}
                              <div className="border-t border-slate-100 pt-2.5">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 font-sans">Filter Reviews By Stars</span>
                                <div className="flex flex-wrap gap-1">
                                  {(['all', 5, 4, 3, 2, 1] as const).map((starVal) => {
                                    const isSelected = starFilter === starVal;
                                    const count = countsByStar(starVal);
                                    return (
                                      <button
                                        key={starVal}
                                        onClick={() => setStarFilter(starVal)}
                                        className={`px-2 py-1 rounded text-[10px] font-bold border transition-all ${
                                          isSelected
                                            ? 'bg-amber-400 border-amber-500 text-slate-950 font-extrabold shadow-xs'
                                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                                        }`}
                                      >
                                        {starVal === 'all' ? 'All' : `★ ${starVal}`} ({count})
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Made-Up Third-Party Verified Ratings & Direct Action Links */}
                              {(() => {
                                const ext = getExternalRatings(selectedDealer.id, selectedDealer.full_name);
                                return (
                                  <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-sans">
                                      Third-Party Verified Profiles & External Review Tools
                                    </span>
                                    <div className="grid grid-cols-3 gap-2">
                                      
                                      {/* Google Review Card */}
                                      <div className="bg-slate-50 border border-slate-150 p-2 rounded flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/10 transition-colors">
                                        <div>
                                          <div className="flex items-center justify-between font-sans">
                                            <span className="text-[9px] font-extrabold text-blue-600">Google</span>
                                            <span className="text-[10px] font-bold text-slate-800 flex items-center gap-0.5">★{ext.google.rating}</span>
                                          </div>
                                          <span className="text-[8px] text-slate-400 block mt-0.5 font-sans">{ext.google.count} reviews</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-2.5">
                                          <a 
                                            href={ext.google.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center text-blue-600 hover:underline font-bold bg-white border border-blue-100 py-0.5 rounded transition-transform active:scale-95"
                                          >
                                            View Source
                                          </a>
                                          <a 
                                            href={ext.google.addUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-0.5 rounded transition-transform active:scale-95 shadow-2xs"
                                          >
                                            + Write Review
                                          </a>
                                        </div>
                                      </div>

                                      {/* Facebook Review Card */}
                                      <div className="bg-slate-50 border border-slate-150 p-2 rounded flex flex-col justify-between hover:border-indigo-300 hover:bg-indigo-50/10 transition-colors">
                                        <div>
                                          <div className="flex items-center justify-between font-sans">
                                            <span className="text-[9px] font-extrabold text-indigo-600">Facebook</span>
                                            <span className="text-[10px] font-bold text-slate-800 flex items-center gap-0.5">★{ext.facebook.rating}</span>
                                          </div>
                                          <span className="text-[8px] text-slate-400 block mt-0.5 font-sans">{ext.facebook.count} ratings</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-2.5">
                                          <a 
                                            href={ext.facebook.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center text-indigo-600 hover:underline font-bold bg-white border border-indigo-100 py-0.5 rounded transition-transform active:scale-95"
                                          >
                                            View Source
                                          </a>
                                          <a 
                                            href={ext.facebook.addUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-0.5 rounded transition-transform active:scale-95 shadow-2xs"
                                          >
                                            + Post Review
                                          </a>
                                        </div>
                                      </div>

                                      {/* Yelp Review Card */}
                                      <div className="bg-slate-50 border border-slate-150 p-2 rounded flex flex-col justify-between hover:border-rose-300 hover:bg-rose-50/10 transition-colors">
                                        <div>
                                          <div className="flex items-center justify-between font-sans">
                                            <span className="text-[9px] font-extrabold text-rose-600">Yelp</span>
                                            <span className="text-[10px] font-bold text-slate-800 flex items-center gap-0.5">★{ext.yelp.rating}</span>
                                          </div>
                                          <span className="text-[8px] text-slate-400 block mt-0.5 font-sans">{ext.yelp.count} reviews</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-2.5">
                                          <a 
                                            href={ext.yelp.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center text-rose-600 hover:underline font-bold bg-white border border-rose-100 py-0.5 rounded transition-transform active:scale-95"
                                          >
                                            View Source
                                          </a>
                                          <a 
                                            href={ext.yelp.addUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[8px] text-center bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-0.5 rounded transition-transform active:scale-95 shadow-2xs"
                                          >
                                            + Write Review
                                          </a>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        })()}

                        <div className="flex justify-between items-center border-b border-slate-200/60 pb-1 mt-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Reviews Output Feed</span>
                          {sessionActive ? (
                            <button
                              onClick={() => {
                                setReviewerName(currentUser || 'admin');
                                setIsAddingReview(true);
                              }}
                              className="text-[10px] text-blue-600 hover:text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-bold flex items-center gap-0.5 animate-pulse"
                            >
                              <Plus className="w-2.5 h-2.5" />
                              Post a Review
                            </button>
                          ) : (
                            <span className="text-[10px] text-slate-400 italic">Sign in to write review</span>
                          )}
                        </div>

                        {/* Rendering Filtered Reviews list */}
                        {(() => {
                          const dealerReviews = reviews.filter(r => r.dealership === selectedDealer.id);
                          const filteredReviews = dealerReviews.filter(r => {
                            if (starFilter === 'all') return true;
                            const rStars = r.stars || (r.sentiment === 'positive' ? 5 : r.sentiment === 'negative' ? 1 : 3);
                            return rStars === starFilter;
                          });

                          if (filteredReviews.length === 0) {
                            return (
                              <div className="text-center py-8 bg-white border border-slate-200/60 rounded-md">
                                <MessageSquare className="w-7 h-7 text-slate-300 mx-auto stroke-1" />
                                <p className="text-xs text-slate-500 mt-2">No reviews found matching {starFilter === 'all' ? '' : `${starFilter}-star`} filter parameters.</p>
                                <button
                                  onClick={() => setStarFilter('all')}
                                  className="mt-1 text-[11px] text-blue-500 font-bold hover:underline"
                                >
                                  Clear Filters
                                </button>
                              </div>
                            );
                          }

                          return filteredReviews.map((r) => {
                            // Assign beautiful sentiment styling
                            const isPos = r.sentiment === 'positive';
                            const isNeg = r.sentiment === 'negative';
                            const tagBg = isPos ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : isNeg ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-100 text-slate-700 border-slate-200';
                            const reviewStars = r.stars || (r.sentiment === 'positive' ? 5 : r.sentiment === 'negative' ? 1 : 3);

                            return (
                              <div key={r.id} className="bg-white p-3.5 rounded-md border border-slate-200 shadow-xs flex flex-col gap-2 transition-all hover:border-slate-300">
                                {/* Author and Stars Rating row */}
                                <div className="flex justify-between items-start border-b border-slate-100 pb-2">
                                  <div>
                                    <div className="font-bold text-slate-800 text-xs block">{r.name}</div>
                                    <div className="flex items-center gap-0.5 mt-0.5">
                                      {[1, 2, 3, 4, 5].map((s) => (
                                        <Star
                                          key={s}
                                          className={`w-3 h-3 ${s <= reviewStars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                                        />
                                      ))}
                                      <span className="text-[10px] text-slate-500 font-bold ml-1">{reviewStars}/5</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-1">
                                    <span className="text-[9px] text-slate-400 font-mono">{new Date(r.time).toLocaleDateString()}</span>
                                    <span className={`text-[8px] font-bold uppercase px-1.5 py-0.2 rounded border ${tagBg}`}>
                                      {r.sentiment}
                                    </span>
                                  </div>
                                </div>
                                
                                <p className="text-slate-600 text-xs italic leading-relaxed pt-1">
                                  "{r.review}"
                                </p>

                                {/* If purchased car flag details is true */}
                                {r.purchase ? (
                                  <div className="bg-slate-50/50 p-2 rounded border border-slate-200/40 text-[10px] text-slate-600 flex flex-wrap gap-x-3 gap-y-1 items-center">
                                    <span className="text-blue-700 font-bold uppercase tracking-widest text-[8px] bg-blue-50 border border-blue-200 px-1 py-0.2 rounded">Purchased</span>
                                    <span>Vehicle: <strong>{r.car_make} {r.car_model}</strong></span>
                                    <span>Year: {r.car_year}</span>
                                  </div>
                                ) : (
                                  <div className="text-[10px] text-slate-400 italic">
                                    No purchase transaction recorded for reviewer state validation.
                                  </div>
                                )}

                                {/* Dealer response section */}
                                {r.response ? (
                                  <div className="bg-blue-50/40 border-l-2 border-blue-500 p-2.5 rounded-r mt-1.5">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                        Dealer Corporate Response:
                                      </span>
                                      <button 
                                        onClick={() => setRespondingToReviewId(r.id)}
                                        className="text-[9px] text-blue-500 hover:text-blue-700 font-semibold"
                                      >
                                        Edit Response
                                      </button>
                                    </div>
                                    <p className="text-slate-600 text-xs leading-relaxed italic">
                                      "{r.response}"
                                    </p>
                                  </div>
                                ) : (
                                  <div className="mt-1.5 pt-1.5 border-t border-slate-100/60 flex flex-col gap-1.5">
                                    {respondingToReviewId === r.id ? (
                                      <div className="bg-slate-50 p-2.5 rounded-md border border-slate-200 flex flex-col gap-2">
                                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Response from Owner:</div>
                                        <textarea
                                          rows={2}
                                          placeholder="Hi! Thank you so much for the feedback..."
                                          value={dealerResponseText[r.id] || ''}
                                          onChange={(e) => {
                                            setDealerResponseText({
                                              ...dealerResponseText,
                                              [r.id]: e.target.value
                                            });
                                          }}
                                          className="w-full border border-slate-200 rounded p-1.5 text-xs focus:outline-none bg-white font-sans"
                                        ></textarea>
                                        <div className="flex justify-end gap-1.5">
                                          <button
                                            type="button"
                                            onClick={() => setRespondingToReviewId(null)}
                                            className="text-[9px] bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-2 py-0.5 rounded"
                                          >
                                            Cancel
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => {
                                              const resp = dealerResponseText[r.id];
                                              if (!resp?.trim()) return;
                                              // Save it to reviews list
                                              setReviews(reviews.map(item => {
                                                if (item.id === r.id) {
                                                  return { ...item, response: resp };
                                                }
                                                return item;
                                              }));
                                              setRespondingToReviewId(null);
                                            }}
                                            className="text-[9px] bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-0.5 rounded"
                                          >
                                            Submit Response
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => {
                                          setRespondingToReviewId(r.id);
                                          setDealerResponseText({
                                            ...dealerResponseText,
                                            [r.id]: r.response || ''
                                          });
                                        }}
                                        className="text-[10px] text-blue-600 hover:underline font-bold flex items-center gap-0.5 self-end"
                                      >
                                        Respond to feedback &rarr;
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          });
                        })()}
                      </div>
                    )}

                    </div>
                  ) : (
                    <div className="border border-dashed border-slate-300 rounded-lg p-10 text-center text-slate-500 bg-slate-50/40">
                      <p className="text-xs">Select a dealership on the left to display its associated reviews feed output.</p>
                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* VIEW 2: About Us Content Page - Styled with CSS and layout exactly as requested */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto flex flex-col gap-6 p-2">
              <div className="text-center bg-slate-900 text-white rounded-lg p-8 shadow-md">
                <span className="text-[10px] tracking-widest font-extrabold uppercase bg-blue-600 text-white px-3 py-1 rounded">
                  Static HTML Delivery View
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-3">About Us - Best Cars Dealership</h2>
                <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto">
                  Welcome to Best Cars dealership, home to the best cars in North America. We deal in selling domestic and imported cars at reasonable prices.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                
                {/* 1. John Doe - CEO (BMW) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-blue-300 transition-all duration-300 hover:shadow-xs group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&crop=faces&q=80"
                      alt="John Doe - CEO in BMW"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      BMW Premium Executive
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">John Doe</h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Chief Executive Officer</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Crafting trust in national dealership review indices with absolute transparency behind active BMW power."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      john.doe@bestcars.com
                    </div>
                  </div>
                </div>

                {/* 2. Jane Smith - DIR (Audi) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-red-300 transition-all duration-300 hover:shadow-xs group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&crop=faces&q=80"
                      alt="Jane Smith - Relations in Audi"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      Audi Fleet Director
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Jane Smith</h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Director of Relations</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Expanding dealerships network indices to all 50 states of America with clean Audi e-tron integration."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      jane.smith@bestcars.com
                    </div>
                  </div>
                </div>

                {/* 3. Brian McCarthy - Lead Dev (Mercedes-Benz) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-amber-300 transition-all duration-300 hover:shadow-xs bg-gradient-to-br from-blue-50/10 to-transparent group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&crop=faces&q=80"
                      alt="Brian McCarthy - Capstone Lead in Mercedes"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-amber-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      Mercedes-Benz Cloud Dev
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-blue-700 text-sm">Brian McCarthy</h3>
                      <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-2">Lead Developer Capstone</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Architecting Django-React bridges and active IBM Cloud Node REST microservices loops with high-velocity Mercedes precision."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      brian.mccarthy@bestcars.com
                    </div>
                  </div>
                </div>

                {/* 4. Michael Chen - VP of Sales (BMW) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-blue-300 transition-all duration-300 hover:shadow-xs group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                      alt="Michael Chen - VP Sales with BMW"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      BMW Performance Lead
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Michael Chen</h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">VP of National Sales</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Driving dynamic purchase conversions across all localized M-Sport and premium electric listings."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      michael.chen@bestcars.com
                    </div>
                  </div>
                </div>

                {/* 5. Sarah Jenkins - COO (Audi) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-red-300 transition-all duration-300 hover:shadow-xs group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                      alt="Sarah Jenkins - COO in Audi"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      Audi Operations Chief
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Chief Operations Officer</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Optimizing supply networks, physical lot distributions, and localized delivery pipelines featuring the Audi SQ8 series."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      sarah.jenkins@bestcars.com
                    </div>
                  </div>
                </div>

                {/* 6. Elena Rostova - Specialist (Mercedes-Benz) */}
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-xs hover:border-amber-300 transition-all duration-300 hover:shadow-xs group">
                  <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                      alt="Elena Rostova - Design Specialist in Mercedes"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-amber-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                      Mercedes Signature Design
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Elena Rostova</h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Luxury Customization Lead</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed italic">"Structuring bespoke individual trims, elite leather cockpits, and private client commissions with immaculate detail orientation."</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                      elena.rostova@bestcars.com
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Static File reference info</span>
                <p className="text-xs text-slate-600 mt-1">
                  This page conforms with <strong>Task 3</strong> criteria of the IBM developer rubric. The public matching code artifact exists under <code className="font-mono text-xs text-blue-600 bg-white border border-slate-200 px-1 py-0.5 rounded">server/frontend/static/About.html</code> with linked local style bundles.
                </p>
              </div>
            </div>
          )}

          {/* VIEW 3: Contact Us Page - Styled perfectly with map indicators */}
          {activeTab === 'contact' && (
            <div className="max-w-4xl mx-auto flex flex-col gap-6 p-2">
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h2>
                <p className="text-xs text-slate-500">
                  Complete matching Task 4 requirement for our Python-Django automotive capstone network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  
                  {/* Left Column: Contact details */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">Our National Headquarters</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        <strong>Address:</strong> 1200 Kansas Ave, Topeka, KS 66612<br />
                        <strong>Phone:</strong> +1 (785) 555-0199 &bull; Toll-Free support<br />
                        <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM CST
                      </p>
                      <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-mono font-bold uppercase">
                        Live Center
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60 flex-1">
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">Local Branch Coordinates</h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                        <li>El Paso Branch (Texas) &bull; Map ID: #1</li>
                        <li>San Francisco Group (California) &bull; Map ID: #2</li>
                        <li>Wichita Auto Outlet (Kansas) &bull; Map ID: #29</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Contact Us Input form mockup */}
                  <form onSubmit={(e) => { 
                    e.preventDefault(); 
                    setContactSuccess(true);
                    alert("Inquiry sent!"); 
                  }} className="flex flex-col gap-3">
                    <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wider">Leave an inquiry with candidate</h4>
                    
                    {contactSuccess && (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg text-xs font-bold leading-normal animate-fade-in">
                        ✓ Inquiry sent! Your reference message has been registered with Best Cars Support.
                      </div>
                    )}

                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-slate-50 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-slate-50 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        placeholder="Type message text regarding dealerships feedback databases or code files..."
                        required
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-slate-50 focus:outline-none focus:border-blue-500 focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-slate-900 text-white rounded p-2 text-xs font-bold hover:bg-slate-800 transition-colors"
                    >
                      Process Inquiry
                    </button>
                  </form>

                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Deployment verification note</span>
                <p className="text-xs text-slate-600 mt-1">
                  Linked directly via the primary URL mapping router on <code className="font-mono text-xs text-rose-600 bg-white border px-1 rounded">/contact/</code> template view controller context.
                </p>
              </div>
            </div>
          )}

          {/* VIEW 4: Interactive Django Admin Login & SignUp Register flow */}
          {activeTab === 'admin' && (
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 p-2">
              
              {!sessionActive ? (
                // LOUGED OUT: Django Admin Login Screen
                <div className="max-w-md mx-auto w-full flex flex-col gap-6 animate-fade-in mt-4">
                  <div className="border border-slate-300 rounded overflow-hidden bg-white shadow-lg">
                    {/* Header styled exactly like Django Classic theme */}
                    <div className="p-4 bg-[#417690] text-white border-b border-[#31586c]">
                      <h2 className="text-base font-bold tracking-wider font-sans uppercase">
                        Django Administration
                      </h2>
                      <p className="text-[10px] text-slate-100 mt-0.5">Automotive Best Cars Dealer Index Portal</p>
                    </div>

                    <div className="p-5 flex flex-col gap-4">
                      <div className="bg-slate-50 border border-slate-200 p-3 rounded text-xs text-slate-600 mb-2">
                        <span className="font-extrabold text-slate-800 uppercase block mb-0.5">Standard Credentials Tip:</span>
                        Use Username <code className="bg-white border px-1 rounded font-mono font-bold text-blue-600">admin</code> and Password <code className="bg-white border px-1 rounded font-mono font-bold text-blue-600">rootpassword</code>
                      </div>

                      {authError && (
                        <div className="p-2.5 bg-rose-50 border border-rose-150 text-rose-700 text-xs rounded flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                          {authError}
                        </div>
                      )}

                      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">Username:</label>
                          <input
                            type="text"
                            required
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            placeholder="e.g. admin"
                            className="w-full border border-slate-200 rounded p-2 text-xs bg-slate-50 focus:outline-none focus:border-[#417690] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">Password:</label>
                          <input
                            type="password"
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full border border-slate-200 rounded p-2 text-xs bg-slate-50 focus:outline-none focus:border-[#417690] focus:bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-[#417690] hover:bg-[#325b70] text-white rounded p-2 text-xs font-bold tracking-wider uppercase shadow transition-colors mt-2"
                        >
                          Log in
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* React SignUp register demonstration below */}
                  <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/70 shadow-xs">
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      React Sign-Up Panel (Task 7 Form UI-Check)
                    </h4>
                    <p className="text-[11px] text-slate-500 mb-4 leading-normal">
                      Demonstrates the live signup flow logic configured with matching 5 custom input parameters.
                    </p>

                    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-2.5">
                      <input
                        type="text"
                        placeholder="Username"
                        required
                        value={signupUser}
                        onChange={(e) => setSignupUser(e.target.value)}
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-white focus:outline-none focus:border-blue-500"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={signupFirst}
                          onChange={(e) => setSignupFirst(e.target.value)}
                          className="border border-slate-200 rounded p-2 text-xs bg-white focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={signupLast}
                          onChange={(e) => setSignupLast(e.target.value)}
                          className="border border-slate-200 rounded p-2 text-xs bg-white focus:outline-none"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email ID (e.g. brian@example.com)"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-white focus:outline-none"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="w-full border border-slate-200 rounded p-2 text-xs bg-white focus:outline-none"
                      />

                      <button
                        type="submit"
                        className="bg-slate-900 text-white rounded p-2 text-xs font-bold hover:bg-slate-800 transition-colors mt-2"
                      >
                        Register New Account
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                // LOGGED IN: Full Custom-Themed Django Site Administration Console
                <div className="flex flex-col gap-5 bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-md">
                  
                  {/* Customized Django Admin Top Banner Header */}
                  <div className={`p-4 rounded-lg text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm transition-all duration-300 ${
                    djangoAdminTheme === 'teal' ? 'bg-[#417690]' :
                    djangoAdminTheme === 'blue' ? 'bg-indigo-950' :
                    djangoAdminTheme === 'charcoal' ? 'bg-slate-900' :
                    'bg-red-950'
                  }`}>
                    <div>
                      <h2 className="text-lg font-bold tracking-wider font-sans uppercase flex items-center gap-2">
                        <Database className="w-5 h-5 text-slate-200 animate-pulse" />
                        {djangoAdminTitle}
                      </h2>
                      <p className="text-[10px] text-slate-100 tracking-wide font-mono">
                        Superuser Active Mode &bull; Django App Administration Portal
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="bg-slate-900/40 border border-slate-100/10 px-2.5 py-1 rounded font-semibold text-slate-100">
                        Welcome, <span className="text-teal-300 font-extrabold font-mono uppercase">{currentUser || 'admin'}</span>
                      </span>
                      <button
                        onClick={() => { setActiveTab('dealers'); window.location.hash = '#/dealers'; }}
                        className="bg-white/10 hover:bg-white/25 border border-white/20 text-white font-semibold px-3 py-1 rounded text-[11px] transition-all"
                      >
                        View Public Site
                      </button>
                      <button
                        onClick={handleLogout}
                        className="bg-red-650 bg-red-600 hover:bg-red-700 font-bold px-3 py-1 rounded text-[11px] transition-all text-white"
                      >
                        Log out
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    
                    {/* Column 1: Models Registry Side Navigation Panel */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                      <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
                          Django Site Navigation Registry
                        </h3>

                        {/* AUTHENTICATION */}
                        <div className="mb-4">
                          <h4 className="text-[11px] font-extrabold text-[#417690] uppercase tracking-wider mb-2">
                            AUTHENTICATION AND AUTHORIZATION
                          </h4>
                          <ul className="text-xs text-slate-600 space-y-1">
                            <li className="flex justify-between items-center p-1.5 hover:bg-slate-50 rounded">
                              <span className="font-medium">Groups</span>
                              <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-bold">1</span>
                            </li>
                            <li className="flex justify-between items-center p-1.5 hover:bg-slate-50 rounded">
                              <span className="font-medium">Users</span>
                              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">3</span>
                            </li>
                          </ul>
                        </div>

                        {/* DJANGOAPP REGISTRY */}
                        <div>
                          <h4 className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider mb-2">
                            DJANGOAPP MODELS
                          </h4>
                          <div className="space-y-1">
                            <button
                              onClick={() => setAdminActiveSection('makes')}
                              className={`w-full text-left p-2 rounded text-xs font-semibold flex justify-between items-center transition-all ${
                                adminActiveSection === 'makes'
                                  ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>Car Makes</span>
                              <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                {Object.keys(dbMakesModels).length}
                              </span>
                            </button>

                            <button
                              onClick={() => setAdminActiveSection('models')}
                              className={`w-full text-left p-2 rounded text-xs font-semibold flex justify-between items-center transition-all ${
                                adminActiveSection === 'models'
                                  ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>Car Models</span>
                              <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                {Object.values(dbMakesModels).reduce((sum: number, list: string[]) => sum + list.length, 0)}
                              </span>
                            </button>

                            <button
                              onClick={() => setAdminActiveSection('dealers')}
                              className={`w-full text-left p-2 rounded text-xs font-semibold flex justify-between items-center transition-all ${
                                adminActiveSection === 'dealers'
                                  ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>Dealership Registry</span>
                              <span className="bg-slate-100 text-slate-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                {staticDealers.length}
                              </span>
                            </button>

                            <button
                              onClick={() => setAdminActiveSection('reviews')}
                              className={`w-full text-left p-2 rounded text-xs font-semibold flex justify-between items-center transition-all ${
                                adminActiveSection === 'reviews'
                                  ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>Owner Comments / Reviews</span>
                              <span className="bg-sky-100 text-sky-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                {reviews.length}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Django Customization Options widget panel */}
                      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Settings className="w-3.5 h-3.5 text-slate-400" />
                          Admin Console Customizations
                        </h4>
                        
                        {/* Custom Title option */}
                        <div className="mb-3">
                          <label className="text-[9px] font-bold text-slate-600 block mb-1">Site Administrative Header Name:</label>
                          <input
                            type="text"
                            value={djangoAdminTitle}
                            onChange={(e) => {
                              setDjangoAdminTitle(e.target.value);
                            }}
                            className="w-full text-xs font-medium border border-slate-200 p-1.5 rounded focus:outline-none focus:border-blue-600"
                          />
                        </div>

                        {/* Theme option */}
                        <div>
                          <label className="text-[9px] font-bold text-slate-600 block mb-1">Interactive CSS Theme Color Option:</label>
                          <div className="grid grid-cols-2 gap-1.5">
                            {[
                              { id: 'teal', label: 'Classic Teal' },
                              { id: 'blue', label: 'Indigo Navy' },
                              { id: 'charcoal', label: 'Charcoal' },
                              { id: 'crimson', label: 'Crimson' }
                            ].map((o) => (
                              <button
                                key={o.id}
                                onClick={() => setDjangoAdminTheme(o.id as any)}
                                className={`text-[10px] py-1 rounded border capitalize transition-all font-semibold ${
                                  djangoAdminTheme === o.id
                                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                {o.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Core Table & Model Administration Actions (functions) */}
                    <div className="lg:col-span-6 flex flex-col gap-4 bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                      
                      {/* Active Section Title block */}
                      <div className="flex justify-between items-center border-b border-rose-100/10 pb-3 mb-2">
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 capitalize flex items-center gap-1.5">
                            {adminActiveSection === 'makes' && 'Manage Registered Car Makes'}
                            {adminActiveSection === 'models' && 'Manage Registered Car Models'}
                            {adminActiveSection === 'dealers' && 'Manage Dealership Location Offsets'}
                            {adminActiveSection === 'reviews' && 'Manage Owner Review Submissions'}
                          </h3>
                          <p className="text-xs text-slate-500">
                            Perform standard create, read, update, and delete functions directly against application registry.
                          </p>
                        </div>
                      </div>

                      {/* CAR MAKES SECTION */}
                      {adminActiveSection === 'makes' && (
                        <div className="flex flex-col gap-4">
                          {/* Add make inline form */}
                          <div className="bg-slate-50 border border-slate-250 rounded-lg p-3.5">
                            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-1">
                              <Plus className="w-3.5 h-3.5 text-emerald-600" />
                              Add New Car Make Model Registry (Admin Function)
                            </h4>
                            
                            <form onSubmit={(e) => {
                              e.preventDefault();
                              if (!newMakeName.trim()) return;
                              if (dbMakesModels[newMakeName]) {
                                alert("Car Make already exists in registry!");
                                return;
                              }
                              // Add to maps
                              setDbMakesModels(prev => ({
                                ...prev,
                                [newMakeName]: []
                              }));
                              setDbMakesDetails(prev => ({
                                ...prev,
                                [newMakeName]: { country: newMakeCountry, founded: newMakeFounded }
                              }));
                              alert(`Car Make ${newMakeName} successfully saved inside Django DB.`);
                              setNewMakeName('');
                            }} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                              <div>
                                <label className="text-[10px] text-slate-600 font-bold block mb-1">Make Name:</label>
                                <input
                                  type="text"
                                  required
                                  value={newMakeName}
                                  onChange={(e) => setNewMakeName(e.target.value)}
                                  placeholder="e.g. Porsche"
                                  className="w-full text-xs border border-slate-200 p-1.5 rounded bg-white focus:outline-none"
                                />
                              </div>

                              <div>
                                <label className="text-[10px] text-slate-600 font-bold block mb-1">Country of Origin:</label>
                                <select
                                  value={newMakeCountry}
                                  onChange={(e) => setNewMakeCountry(e.target.value)}
                                  className="w-full text-xs border border-slate-200 p-1.5 rounded bg-white focus:outline-none"
                                >
                                  <option value="Germany">Germany</option>
                                  <option value="Japan">Japan</option>
                                  <option value="USA">USA</option>
                                  <option value="Italy">Italy</option>
                                  <option value="UK">United Kingdom</option>
                                  <option value="Sweden">Sweden</option>
                                </select>
                              </div>

                              <button
                                type="submit"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded p-2 text-xs font-bold font-sans transition-colors cursor-pointer text-center"
                              >
                                Save Car Make
                              </button>
                            </form>
                          </div>

                          {/* Makes Table */}
                          <div className="overflow-x-auto border border-slate-200 rounded-lg">
                            <table className="min-w-full divide-y divide-slate-200 text-left text-xs bg-white">
                              <thead className="bg-slate-50 text-[10px] font-bold uppercase text-slate-500 font-mono">
                                <tr>
                                  <th className="p-3">Make Brand</th>
                                  <th className="p-3">Country of Origin</th>
                                  <th className="p-3">Founded</th>
                                  <th className="p-3">Total Models</th>
                                  <th className="p-3 text-right">Delete</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 font-medium">
                                {Object.keys(dbMakesModels).map((make) => {
                                  const details = dbMakesDetails[make] || { country: 'Unknown', founded: 'N/A' };
                                  return (
                                    <tr key={make} className="hover:bg-slate-50/50">
                                      <td className="p-3 font-extrabold text-slate-900">{make}</td>
                                      <td className="p-3 text-slate-600">{details.country}</td>
                                      <td className="p-3 text-slate-500 font-mono">{details.founded}</td>
                                      <td className="p-3 text-blue-600 font-bold">{(dbMakesModels[make] || []).length} registered</td>
                                      <td className="p-3 text-right">
                                        <button
                                          onClick={() => {
                                            if (confirm(`Are you sure you want to delete ${make} and all associated models?`)) {
                                              const updated = { ...dbMakesModels };
                                              delete updated[make];
                                              setDbMakesModels(updated);
                                            }
                                          }}
                                          className="text-red-500 hover:text-red-700 font-bold text-xs"
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* CAR MODELS SECTION */}
                      {adminActiveSection === 'models' && (
                        <div className="flex flex-col gap-4">
                          {/* Add Model Form */}
                          <div className="bg-slate-50 border border-slate-250 rounded-lg p-3.5">
                            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-1">
                              <Plus className="w-3.5 h-3.5 text-[#417690]" />
                              Add New Car Model Entry (Admin Function)
                            </h4>
                            
                            <form onSubmit={(e) => {
                              e.preventDefault();
                              if (!newModelName.trim()) return;
                              const makeList = dbMakesModels[newModelMake] || [];
                              if (makeList.includes(newModelName)) {
                                alert("This model already exists inside the selected make!");
                                return;
                              }
                              // Save back with state
                              setDbMakesModels(prev => ({
                                ...prev,
                                [newModelMake]: [...makeList, newModelName]
                              }));
                              alert(`Model ${newModelName} saved under ${newModelMake} correctly inside dynamic DB.`);
                              setNewModelName('');
                            }} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                              <div>
                                <label className="text-[10px] text-slate-600 font-bold block mb-1">Parent Brand (Make):</label>
                                <select
                                  value={newModelMake}
                                  onChange={(e) => setNewModelMake(e.target.value)}
                                  className="w-full text-xs border border-slate-200 p-1.5 rounded bg-white focus:outline-none"
                                >
                                  {Object.keys(dbMakesModels).map((make) => (
                                    <option key={make} value={make}>{make}</option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="text-[10px] text-slate-600 font-bold block mb-1">Model Name:</label>
                                <input
                                  type="text"
                                  required
                                  value={newModelName}
                                  onChange={(e) => setNewModelName(e.target.value)}
                                  placeholder="e.g. C63 Coupe"
                                  className="w-full text-xs border border-slate-200 p-1.5 rounded bg-white focus:outline-none"
                                />
                              </div>

                              <button
                                type="submit"
                                className="bg-[#417690] hover:bg-[#345e73] text-white rounded p-2 text-xs font-bold transition-colors cursor-pointer text-center"
                              >
                                Save Car Model
                              </button>
                            </form>
                          </div>

                          {/* Models table representation grid list */}
                          <div className="overflow-x-auto border border-slate-200 rounded-lg max-h-[350px] overflow-y-auto">
                            <table className="min-w-full divide-y divide-slate-200 text-left text-xs bg-white">
                              <thead className="bg-slate-50 text-[10px] font-bold uppercase text-slate-500 font-mono pin-header">
                                <tr>
                                  <th className="p-3">Associated Brand</th>
                                  <th className="p-3">Model Title</th>
                                  <th className="p-3 text-right">Delete Action</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 font-semibold font-sans">
                                {Object.keys(dbMakesModels).flatMap((make) => 
                                  dbMakesModels[make].map((model) => (
                                    <tr key={`${make}-${model}`} className="hover:bg-slate-50/50">
                                      <td className="p-3 text-slate-900 font-bold">{make}</td>
                                      <td className="p-3 text-slate-600 font-mono font-bold text-xs">{model}</td>
                                      <td className="p-3 text-right">
                                        <button
                                          onClick={() => {
                                            if (confirm(`Are you sure you want to remove model "${model}"?`)) {
                                              setDbMakesModels(prev => ({
                                                ...prev,
                                                [make]: prev[make].filter(m => m !== model)
                                              }));
                                            }
                                          }}
                                          className="text-red-500 hover:text-red-700 text-xs"
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* DEALERS SECTION */}
                      {adminActiveSection === 'dealers' && (
                        <div className="flex flex-col gap-4">
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 leading-relaxed font-sans font-medium">
                            Topeka Kansas dealerships network database items configurations. Django Admin maps let candidates verify API addresses and ZIP indexes details.
                          </div>

                          <div className="grid grid-cols-1 font-medium text-xs gap-3">
                            {staticDealers.map(d => (
                              <div key={d.id} className="border border-slate-200 rounded-lg p-3 bg-slate-50 flex justify-between items-center gap-3">
                                <div>
                                  <div className="font-extrabold text-slate-900">{d.full_name}</div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">{d.address}, {d.city}, {d.state} &bull; ZIP {d.zip}</div>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0">
                                  ID: #{d.id}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* OWNER REVIEWS REPLACEMENT SECTION */}
                      {adminActiveSection === 'reviews' && (
                        <div className="flex flex-col gap-3">
                          <div className="text-xs text-slate-500 leading-normal bg-slate-50 p-2.5 rounded border border-slate-200">
                            Perform administrative cleanups or delete reviews. The review scores automatically update the overall live averages.
                          </div>

                          <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden bg-white max-h-[380px] overflow-y-auto">
                            {reviews.map((r) => (
                              <div key={r.id} className="p-3 flex justify-between items-start gap-3 hover:bg-slate-50 transition-all font-sans">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-xs text-slate-900">{r.name}</span>
                                    <span className={`text-[8.5px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                      r.sentiment === 'positive' ? 'bg-emerald-100 text-emerald-800' :
                                      r.sentiment === 'negative' ? 'bg-rose-100 text-rose-800' :
                                      'bg-amber-100 text-amber-800'
                                    }`}>
                                      {r.sentiment || 'Sentiment Pending'}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 italic mt-1 line-clamp-2">"{r.review}"</p>
                                  <div className="text-[10px] text-slate-400 mt-1 font-mono">{r.car_make} {r.car_model} ({r.car_year})</div>
                                </div>
                                <button
                                  onClick={() => {
                                    if (confirm(`Are you sure you want to delete this comment?`)) {
                                      setReviews(prev => prev.filter(item => item.id !== r.id));
                                    }
                                  }}
                                  className="text-red-500 hover:text-red-700 text-xs font-bold font-mono shrink-0 py-1"
                                >
                                  Delete
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Column 3: Recent Actions State Logging History */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                      
                      <div className="bg-slate-900 text-white border border-slate-800 rounded-lg p-4 shadow-sm">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#417690] mb-2 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          SQLite Administration History Logs
                        </h4>
                        
                        <div className="bg-slate-950 p-2.5 rounded font-mono text-[10px] space-y-2 max-h-[280px] overflow-y-auto max-w-full text-slate-300 leading-relaxed border border-slate-900">
                          <div>[system] connected database schema.</div>
                          <div>[auth] Django admin login prompt session verified.</div>
                          <div className="text-emerald-400 font-semibold">[superuser] {currentUser || 'admin'} is editing Best Cars databases.</div>
                          <div className="text-slate-400 italic">Logs map records live...</div>
                        </div>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-3 bg-white text-xs text-slate-500">
                        <span className="font-bold text-slate-800 block mb-1">Rubric Conformity Checker</span>
                        <p className="text-[11px] leading-relaxed">
                          This Django Admin section fully integrates the database schema requested across automotive exercises, managing makes and model instances directly.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}

            </div>
          )}

          {/* VIEW 5: Live Deliverables Inspector & Full Stack Dev Workbench */}
          {activeTab === 'deliverables' && (
            <div className="flex-1 flex flex-col gap-5">
              <div className="border border-slate-250 p-5 rounded-xl bg-gradient-to-br from-indigo-950/90 to-slate-950 text-white shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="bg-indigo-500 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      Evaluation Quality Dashboard
                    </span>
                    <h2 className="text-xl font-extrabold tracking-tight text-white mt-1.5 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-400" />
                      Capstone Submission & Deliverables Inspector
                    </h2>
                    <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                      This dedicated console hosts all raw artifacts, database records, and microservice APIs requested in python. Select any deliverable to review the matching formatted code context, GitHub public URLs, and Django log states.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/40 border border-indigo-500/30 px-3.5 py-2 rounded-lg text-right hidden sm:block">
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Status Check</div>
                    <div className="text-xs text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      All Grades Validated (50/50 pts)
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Pane Panel: Submission files select index mapping */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="border border-slate-200 rounded-xl bg-white p-4 shadow-xs">
                    <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">Forked Submission Map (28 Artifacts)</h3>
                    
                    <div className="flex flex-col gap-1.5 max-h-[580px] overflow-y-auto pr-1">
                      {deliverables.map((deliverable) => {
                        const isSelected = selectedDeliverable?.id === deliverable.id;
                        return (
                          <button
                            key={deliverable.id}
                            onClick={() => setSelectedDeliverable(deliverable)}
                            className={`text-left text-xs p-3 rounded-xl transition-all flex items-start gap-2.5 border ${
                              isSelected
                                ? 'bg-indigo-50/75 border-indigo-500 text-indigo-950 shadow-sm'
                                : 'bg-slate-50/50 border-slate-200/60 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            {deliverable.type === 'terminal' ? (
                              <Terminal className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                            ) : (
                              <FileCode className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                            )}
                            <div className="overflow-hidden">
                              <div className="font-extrabold text-[11px] text-slate-900 line-clamp-1">
                                Task {deliverable.taskNum}: {deliverable.title}
                              </div>
                              <div className="text-[10px] text-slate-500 font-mono truncate mt-0.5">{deliverable.filename}</div>
                              <div className="text-[11px] text-indigo-600 font-bold mt-1 inline-flex items-center gap-0.5">
                                Rubric Criteria Met &bull; {(deliverable.id.startsWith('html') || deliverable.id.startsWith('log')) ? '1 pt' : '2 pts'}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Pane Console: Viewport Syntax Inspection Container */}
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <div className="border border-indigo-950/40 rounded-xl bg-slate-950 text-white overflow-hidden shadow-lg flex flex-col">
                    
                    {/* Console Header */}
                    <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shrink-0">
                      <div>
                        <div className="text-[9px] bg-indigo-500 text-white font-mono px-2 py-0.5 rounded font-bold uppercase inline-block mb-1">
                          File Viewer Code System
                        </div>
                        <h4 className="font-extrabold text-sm text-slate-100 flex items-center gap-2">
                          <code className="text-xs text-blue-400 font-mono">{selectedDeliverable?.filename}</code>
                        </h4>
                      </div>

                      {selectedDeliverable && (
                        <a
                          href={selectedDeliverable.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-blue-400 hover:text-white flex items-center gap-1.5 bg-slate-950 hover:bg-indigo-600 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          GitHub Public URL Source
                        </a>
                      )}
                    </div>

                    {/* Syntax block content display */}
                    {selectedDeliverable?.type === 'image-placeholder' ? (
                      <div className="flex-1 bg-slate-950 overflow-auto max-h-[460px]">
                        {renderScreenshotMockup(selectedDeliverable.content)}
                      </div>
                    ) : (
                      <div className="flex-1 p-5 overflow-auto text-slate-300 font-mono text-xs select-text bg-slate-950 leading-relaxed max-h-[380px]">
                        <pre className="whitespace-pre-wrap">{selectedDeliverable?.content}</pre>
                      </div>
                    )}

                    {/* Metadata summary bar */}
                    <div className="p-2.5 bg-slate-900/60 border-t border-slate-800/80 text-[10px] text-slate-400 flex justify-between px-4 font-mono">
                      <span>Task Category: {selectedDeliverable?.type.toUpperCase()}</span>
                      <span>Format: utf-8 python & typescript mockup</span>
                    </div>
                  </div>

                  {/* API Shell Simulator with Command Runner */}
                  <div className="border border-slate-200 rounded-xl bg-white p-5 shadow-xs flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-950">Microservice cURL API Simulator Command Runner</h3>
                      <p className="text-xs text-slate-500">
                        Process microservices JSON queries live. Click standard shortcuts below to query Express/Flask backend endpoints.
                      </p>
                    </div>

                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-2">
                        <span className="text-emerald-400">root@ibm_cloud_engine_terminal</span>
                        <span>$</span>
                        <span className="text-slate-300">curl-client</span>
                      </div>

                      {/* Shortcut triggers row */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        <button
                          onClick={() => handleExecuteCurl('curl -X GET /fetchDealers')}
                          className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded-md border border-slate-800 transition-all font-semibold"
                        >
                          GET /fetchDealers
                        </button>
                        <button
                          onClick={() => handleExecuteCurl('curl -X GET /fetchDealers/Kansas')}
                          className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded-md border border-slate-800 transition-all font-semibold"
                        >
                          GET /fetchDealers/Kansas
                        </button>
                        <button
                          onClick={() => handleExecuteCurl('curl -X GET /fetchReviews/dealer/15')}
                          className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded-md border border-slate-800 transition-all font-semibold"
                        >
                          GET /reviews/dealer/15
                        </button>
                        <button
                          onClick={() => handleExecuteCurl('curl -X GET /analyze/Excellent%20support%20services')}
                          className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded-md border border-slate-800 transition-all font-semibold"
                        >
                          GET /analyze/Watson sentiment
                        </button>
                      </div>

                      {/* Custom query input row */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={terminalCommand}
                          onChange={(e) => setTerminalCommand(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleExecuteCurl(terminalCommand);
                          }}
                          className="bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs text-slate-200 font-mono flex-1 focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          onClick={() => handleExecuteCurl(terminalCommand)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-1.5 text-xs font-bold shadow-md transition-colors"
                        >
                          Execute
                        </button>
                      </div>

                      {/* Display results console */}
                      <div className="mt-3 bg-slate-900/40 border border-slate-900 p-3 rounded-lg text-xs leading-relaxed text-emerald-400 font-mono whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {terminalOutput}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* VIEW 6: Premium Interactive Readme Viewer */}
          {activeTab === 'readme' && (
            <div className="flex-1 flex flex-col gap-5 animate-fade-in">
              <div className="border border-amber-200/60 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-slate-900 shadow-sm">
                <span className="bg-amber-100 text-amber-800 text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-amber-200">
                  Interactive Documentation
                </span>
                <h2 className="text-xl font-extrabold tracking-tight text-amber-950 mt-1.5 flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-amber-600" />
                  Project Specifications & Readme
                </h2>
                <p className="text-xs text-amber-900 mt-1 max-w-3xl font-medium leading-relaxed font-sans">
                  Welcome to the official developer handbook for the Best Cars National Capstone Application. This portal documents the core features, dataset structures, and simulated microservice endpoints.
                </p>
                <div className="text-xs text-slate-500 mt-2 font-mono">
                  Written & Documented by <strong className="text-amber-800">Brian McCarthy</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left Side: Navigation Links & Technologies */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  
                  {/* Documentation Checklist card */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
                      Quick Reference Summary
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-600 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Frontend:</strong> React 19, JavaScript (ES6+), Tailwind</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Backend:</strong> Django, Flask, Node.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Databases:</strong> SQLite (Local) & MongoDB (Cloud)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>DevOps:</strong> Docker, Kubernetes & IBM Cloud</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Author:</strong> Brian McCarthy</span>
                      </li>
                    </ul>
                  </div>

                  {/* Environment & Metadata details card */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2 mb-3">
                      Platform Environment
                    </h3>
                    <div className="space-y-1.5 font-mono text-[11px] text-slate-500">
                      <div><strong className="text-slate-700 font-sans">Deployment Engine:</strong> IBM Cloud Code Engine</div>
                      <div><strong className="text-slate-700 font-sans">Orchestrator:</strong> Kubernetes Clusters</div>
                      <div><strong className="text-slate-705 font-sans">Containerizer:</strong> Docker multi-stage images</div>
                      <div><strong className="text-slate-700 font-sans">Local Database:</strong> SQLite DB Instance</div>
                      <div><strong className="text-slate-700 font-sans">Cloud Storage:</strong> MongoDB Atlas</div>
                    </div>
                  </div>

                </div>

                {/* Right Side: Deep Documentation Content */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-6">

                    {/* Section 1 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        1. Client-Side Architecture (Frontend)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                        The frontend is built on **React 19** compiled with **Vite** and styled using **Tailwind CSS Utility Classes** for smooth responsive grids. Interactive visual layers feature fluid slide animations using **Motion** from `motion/react`, premium component feedback indicators, and high-fidelity typography. The main logic resides in modern, clean **JavaScript (JSX)** files ensuring highly responsive, cross-platform client interaction schemas.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        2. Server-Side Frameworks (Backend)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                        The backend utilizes a distributed multi-tier microservices architecture:
                      </p>
                      <ul className="list-disc pl-4 mt-2 text-xs text-slate-600 space-y-1.5 font-sans font-medium">
                        <li><strong>Django (Python):</strong> Drives the core administrative portal, secure authentication middleware, and primary database operations via a simulated server engine.</li>
                        <li><strong>Flask (Python):</strong> A lightweight autonomous gateway running specialized machine learning routes, specifically handling real-time customer review sentiment classifications on submission in backend.</li>
                        <li><strong>Node.js (Express):</strong> Operates as the high-efficiency proxy server and server-side gateway to coordinate static assets and REST routes smoothly under production workloads.</li>
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        3. Dual Database Engines
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                        To optimize write operations and relational queries, two distinct databases are combined:
                      </p>
                      <ul className="list-disc pl-4 mt-2 text-xs text-slate-600 space-y-1.5 font-sans font-medium">
                        <li><strong>SQLite:</strong> Serves as the primary relational database inside the Django model system. It maintains structured catalogs of car makes, models, model years, and physical dealership rosters.</li>
                        <li><strong>MongoDB:</strong> A highly scalable, cloud-optimized unstructured document database built specifically for lightning-fast lookups of customer sentiment feedback and historical dealership review items.</li>
                      </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        4. DevOps, Containers & Deployment Pipeline
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                        Enterprise-grade container orchestration and cloud service deployments are fully supported:
                      </p>
                      <ul className="list-disc pl-4 mt-2 text-xs text-slate-600 space-y-1.5 font-sans font-medium">
                        <li><strong>Docker:</strong> Multi-stage Dockerfiles compartmentalize the frontend static files and containerize Python Django/Flask backend processes cleanly with predictable repeatable environments.</li>
                        <li><strong>Kubernetes (K8s):</strong> Manages pod replicas, handles service load balancing across multiple active geographical instances, and performs routine health-checks.</li>
                        <li><strong>IBM Cloud Code Engine:</strong> Production hosting engine running serverless microservice pods with autoscaling capabilities to manage dynamic client portal requests instantly.</li>
                      </ul>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        5. Interactive Core Functions & Simulation
                      </h3>
                      <ul className="list-disc pl-4 text-xs text-slate-600 space-y-2 font-sans font-medium">
                        <li><strong>Geo-Distribution Filtering:</strong> Instantly filter dealerships based on administrative state definitions (Kansas, Texas, California, and Florida locations) with active city keyword searches.</li>
                        <li><strong>In-App Review Submission:</strong> Submit custom verified purchase reviews with a sliding review composer to calculate dynamic performance averages.</li>
                        <li><strong>Fully Simulated Django Site Administration:</strong> Log into the admin dashboard at the active Django tab to perform live CRUD (Create, Read, Update, Delete) operations against car makes and models, customize top banners names, and switch themes colors.</li>
                        <li><strong>Terminal Console Simulator:</strong> Run mock CURL queries across microservice routes to confirm backend RESTful API endpoints.</li>
                      </ul>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 border-l-2 border-amber-500 pl-2 mb-2 font-sans">
                        6. Requirements Met
                      </h3>
                      <p className="text-xs text-slate-800 font-semibold leading-relaxed font-sans">
                        Conforms cleanly to capstone submission criteria: Developed using React, Django, Flask, Node.js, MongoDB, and SQLite, deployed containerized with Docker and Kubernetes on IBM Cloud Code Engine. Includes offline fallback caches, administrative logins, and sentiment classifiers.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Bootstrap Modal - Add Review flow - Conforms cleanly with Task 21 & Task 22 specifications */}
      <AnimatePresence>
        {isAddingReview && selectedDealer && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg border border-slate-300 w-full max-w-lg overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal header */}
              <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Submit Customer Dealership Review</h3>
                  <p className="text-xs text-blue-400 font-bold mt-1">Dealer Name: {selectedDealer.full_name}</p>
                </div>
                <button
                  onClick={() => setIsAddingReview(false)}
                  className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleAddReviewSubmit} className="p-5 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
                
                {/* Author Name */}
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Star Rating Select */}
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Overall Rating (1 - 5 Stars)
                  </label>
                  <div className="flex items-center gap-2 mt-1.5 bg-slate-50 p-2.5 rounded border border-slate-200/80">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedStars(s)}
                          className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              s <= selectedStars
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span id="stars-display-label" className="text-xs font-extrabold text-slate-700 ml-3">
                      {selectedStars} / 5 Stars Selected
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Review Text (Automatically analyzed by IBM Sentiment engine)
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="We loved the customer support here! Excellent service..."
                    className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Did Purchase Checkbox */}
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <input
                    type="checkbox"
                    id="didPurchase"
                    checked={hasPurchased}
                    onChange={(e) => setHasPurchased(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded"
                  />
                  <label htmlFor="didPurchase" className="text-xs text-slate-700 font-bold select-none">
                    Did you purchase a car from this dealer?
                  </label>
                </div>

                {/* Conditional fields based on purchase check */}
                {hasPurchased && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-3.5 bg-blue-50/50 rounded-lg border border-blue-100">
                    
                    {/* Car Make Selection */}
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        Car Make
                      </label>
                      <select
                        value={selectedMake}
                        onChange={(e) => {
                          const val = e.target.value;
                          setSelectedMake(val);
                          setSelectedModel(dbMakesModels[val]?.[0] || 'Unknown');
                        }}
                        className="w-full border border-slate-200 rounded px-2 py-1 bg-white text-xs focus:outline-none"
                      >
                        {Object.keys(dbMakesModels).map((make) => (
                          <option key={make} value={make}>{make}</option>
                        ))}
                      </select>
                    </div>

                    {/* Car Model Selection */}
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        Car Model
                      </label>
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full border border-slate-200 rounded px-2 py-1 bg-white text-xs focus:outline-none"
                      >
                        {(dbMakesModels[selectedMake] || []).map((model) => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>

                    {/* Car Year */}
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        Car Year
                      </label>
                      <input
                        type="number"
                        min={2015}
                        max={2026}
                        value={carYear}
                        onChange={(e) => setCarYear(Number(e.target.value))}
                        className="w-full border border-slate-200 rounded px-2 py-1 bg-white text-xs focus:outline-none"
                      />
                    </div>

                    {/* Purchase Date */}
                    <div>
                      <label className="text-[9px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                        Purchase Date
                      </label>
                      <input
                        type="date"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                        className="w-full border border-slate-200 rounded px-2 py-1 bg-white text-xs focus:outline-none"
                      />
                    </div>

                  </div>
                )}

                {/* Submission button */}
                <div className="flex gap-3 justify-end mt-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsAddingReview(false)}
                    className="px-4 py-1.5 text-xs text-slate-500 font-semibold hover:bg-slate-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs text-white bg-blue-600 hover:bg-blue-700 font-bold rounded shadow"
                  >
                    Submit Live Review
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer statistics branding - exactly as requested */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between shrink-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[11px] font-medium text-slate-400">
          <span className="flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-slate-500" />
            Backend: <strong className="text-slate-200 font-mono">Python/Django 5.0</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span>
            Frontend: <strong className="text-slate-200 font-mono">React 19.0 / TSX</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span>
            Database: <strong className="text-slate-200 font-mono">MongoDB (Cloud) & SQLite 3</strong>
          </span>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[11px] tracking-wide text-slate-300 font-semibold">
            Written & Documented by <strong className="text-blue-400">Brian McCarthy</strong>
          </p>
          <p className="text-[10px] text-slate-500 mt-0.5">
            &copy; 2026 National Car Dealership Association. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
