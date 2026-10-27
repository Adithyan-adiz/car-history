/* ==========================================
   AUTOTRACE - JAVASCRIPT LOGIC (script.js)
   ========================================== */

// Comprehensive Fictional Vehicle Dummy Database (10 Vehicles) with Real Spec Mapping Support
const vehiclesData = [
    {
        id: 1,
        brand: "Toyota",
        model: "Innova Crysta",
        year: 2022,
        registrationNumber: "KL-07-CD-5678",
        vin: "SAMPLEVINTOYOTA001",
        fuelType: "Diesel",
        transmission: "Manual",
        engineCapacity: "2393 cc",
        horsepower: "150 HP @ 3400 rpm",
        torque: "343 Nm @ 1400-2800 rpm",
        driveType: "Rear-Wheel Drive (RWD)",
        bodyType: "MUV / SUV",
        color: "Attitude Black",
        mileage: 42000,
        ownerCount: 1,
        healthScore: 92,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-05-15",
        pollutionExpiry: "2026-11-20",
        state: "Kerala (KL)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2022-06-10", endDate: "Present", type: "Individual", name: "Rajesh Kumar (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2026-01-10", center: "Toyota Authorized Service, Kochi", odometer: "40,000 km", maintenance: "Major Service, Engine oil replacement, Brake pad change", cost: "₹14,500" },
            { date: "2025-06-15", center: "Toyota Authorized Service, Kochi", odometer: "25,000 km", maintenance: "Regular Periodic Service, Alignment & Balancing", cost: "₹6,800" },
            { date: "2024-06-12", center: "Toyota Authorized Service, Kochi", odometer: "10,000 km", maintenance: "First Free Inspection Service", cost: "₹0" }
        ],
        mileageHistory: [
            { year: "2022", km: 0 },
            { year: "2023", km: 15000 },
            { year: "2024", km: 28000 },
            { year: "2025", km: 38000 },
            { year: "2026", km: 42000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Hypothecation Cleared (No Active Loan)",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 94,
            engine: 95,
            maintenance: 96,
            mileageConsistency: 90,
            accidentIndicator: 85
        }
    },
    {
        id: 2,
        brand: "Hyundai",
        model: "Creta SX",
        year: 2023,
        registrationNumber: "KL-01-AZ-9988",
        vin: "SAMPLEVINHYUNDAI02",
        fuelType: "Petrol",
        transmission: "Automatic",
        engineCapacity: "1497 cc",
        horsepower: "113 HP @ 6300 rpm",
        torque: "144 Nm @ 4500 rpm",
        driveType: "Front-Wheel Drive (FWD)",
        bodyType: "Compact SUV",
        color: "Phantom Black",
        mileage: 28500,
        ownerCount: 1,
        healthScore: 88,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-08-10",
        pollutionExpiry: "2027-01-15",
        state: "Kerala (KL)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2023-09-01", endDate: "Present", type: "Individual", name: "Ananya Menon (Sample)" }
        ],
        accidentHistory: [
            { date: "2024-11-04", description: "Minor bumper scrape in parking lot, front plastic bumper replaced", severity: "Minor", status: "Repaired via Insurance" }
        ],
        serviceHistory: [
            { date: "2026-02-01", center: "Hyundai Service Hub, Trivandrum", odometer: "27,000 km", maintenance: "Periodic maintenance, AC filter replacement", cost: "₹5,400" },
            { date: "2025-02-10", center: "Hyundai Service Hub, Trivandrum", odometer: "14,000 km", maintenance: "1st Year Inspection Service", cost: "₹3,200" }
        ],
        mileageHistory: [
            { year: "2023", km: 0 },
            { year: "2024", km: 14000 },
            { year: "2025", km: 24000 },
            { year: "2026", km: 28500 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Active Auto Loan (Sample Finance Ltd)",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 85,
            engine: 92,
            maintenance: 90,
            mileageConsistency: 88,
            accidentIndicator: 85
        }
    },
    {
        id: 3,
        brand: "Tata",
        model: "Nexon EV",
        year: 2024,
        registrationNumber: "KA-03-MX-1234",
        vin: "SAMPLEVINTATA0003",
        fuelType: "Electric",
        transmission: "Automatic",
        engineCapacity: "Electric Permanent Magnet Sync Motor",
        horsepower: "143 HP",
        torque: "215 Nm",
        driveType: "Front-Wheel Drive (FWD)",
        bodyType: "Compact SUV",
        color: "Teal Blue",
        mileage: 18000,
        ownerCount: 1,
        healthScore: 96,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2028-03-20",
        pollutionExpiry: "N/A (Electric Vehicle)",
        state: "Karnataka (KA)",
        vehicleClass: "Battery Electric Vehicle",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2024-04-15", endDate: "Present", type: "Individual", name: "Siddharth Rao (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2025-10-10", center: "Tata EV Service Center, Bengaluru", odometer: "12,000 km", maintenance: "Battery Health Diagnostics, Software Update v4.2", cost: "₹1,500" }
        ],
        mileageHistory: [
            { year: "2024", km: 0 },
            { year: "2025", km: 12000 },
            { year: "2026", km: 18000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "No Outstanding Loan",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 98,
            engine: 99,
            maintenance: 95,
            mileageConsistency: 96,
            accidentIndicator: 92
        }
    },
    {
        id: 4,
        brand: "Maruti Suzuki",
        model: "Swift ZXI",
        year: 2021,
        registrationNumber: "TN-22-BY-4321",
        vin: "SAMPLEVINMARUTI04",
        fuelType: "Petrol",
        transmission: "Manual",
        engineCapacity: "1197 cc",
        horsepower: "89 HP @ 6000 rpm",
        torque: "113 Nm @ 4400 rpm",
        driveType: "Front-Wheel Drive (FWD)",
        bodyType: "Hatchback",
        color: "Solid Fire Red",
        mileage: 64000,
        ownerCount: 2,
        healthScore: 74,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2026-11-10",
        pollutionExpiry: "2026-09-05",
        state: "Tamil Nadu (TN)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2021-05-12", endDate: "2024-02-10", type: "Individual", name: "Karthik Subramanian (Sample)" },
            { startDate: "2024-03-01", endDate: "Present", type: "Individual", name: "Priya Sharma (Sample)" }
        ],
        accidentHistory: [
            { date: "2023-08-19", description: "Rear collision in city traffic, tailgate and bumper repaired", severity: "Moderate", status: "Claim Settled" }
        ],
        serviceHistory: [
            { date: "2026-01-20", center: "Maruti Authorized Service, Chennai", odometer: "61,000 km", maintenance: "Clutch overhaul, Engine tune-up, Oil change", cost: "₹9,200" },
            { date: "2025-05-10", center: "Maruti Authorized Service, Chennai", odometer: "48,000 km", maintenance: "Regular Service, Suspension check", cost: "₹4,500" }
        ],
        mileageHistory: [
            { year: "2021", km: 0 },
            { year: "2022", km: 22000 },
            { year: "2023", km: 41000 },
            { year: "2024", km: 53000 },
            { year: "2025", km: 60000 },
            { year: "2026", km: 64000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Hypothecation Cleared",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 70,
            engine: 76,
            maintenance: 75,
            mileageConsistency: 72,
            accidentIndicator: 75
        }
    },
    {
        id: 5,
        brand: "Mahindra",
        model: "Scorpio-N",
        year: 2023,
        registrationNumber: "MH-12-PQ-8899",
        vin: "SAMPLEVINMAHINDRA5",
        fuelType: "Diesel",
        transmission: "Automatic",
        engineCapacity: "2184 cc",
        horsepower: "172 HP @ 3500 rpm",
        torque: "400 Nm @ 1750-2750 rpm",
        driveType: "Rear-Wheel Drive / 4x4",
        bodyType: "Full-Size SUV",
        color: "Dazzling Silver",
        mileage: 36000,
        ownerCount: 1,
        healthScore: 89,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-09-30",
        pollutionExpiry: "2027-02-10",
        state: "Maharashtra (MH)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2023-10-05", endDate: "Present", type: "Commercial / Individual", name: "Vikram Deshmukh (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2025-12-12", center: "Mahindra Service Arena, Pune", odometer: "32,000 km", maintenance: "Suspension greasing, 4WD differential oil change", cost: "₹11,000" }
        ],
        mileageHistory: [
            { year: "2023", km: 0 },
            { year: "2024", km: 16000 },
            { year: "2025", km: 30000 },
            { year: "2026", km: 36000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Active Bank Finance",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 90,
            engine: 91,
            maintenance: 88,
            mileageConsistency: 87,
            accidentIndicator: 89
        }
    },
    {
        id: 6,
        brand: "BMW",
        model: "320d Luxury Line",
        year: 2020,
        registrationNumber: "DL-01-CA-1122",
        vin: "SAMPLEVINBMW00006",
        fuelType: "Diesel",
        transmission: "Automatic",
        engineCapacity: "1995 cc",
        horsepower: "187 HP @ 4000 rpm",
        torque: "400 Nm @ 1750-2500 rpm",
        driveType: "Rear-Wheel Drive (RWD)",
        bodyType: "Sedan",
        color: "Mineral White",
        mileage: 71000,
        ownerCount: 2,
        healthScore: 79,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2026-12-31",
        pollutionExpiry: "2026-10-12",
        state: "Delhi (DL)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2020-03-10", endDate: "2023-05-15", type: "Corporate", name: "Apex Global Ltd (Sample)" },
            { startDate: "2023-06-01", endDate: "Present", type: "Individual", name: "Manish Malhotra (Sample)" }
        ],
        accidentHistory: [
            { date: "2022-02-14", description: "Minor scrape on passenger side doors, repaired at authorized BMW workshop", severity: "Minor", status: "Insurance Claim Paid" }
        ],
        serviceHistory: [
            { date: "2026-01-05", center: "Deutsche Motoren BMW, New Delhi", odometer: "68,000 km", maintenance: "Brake discs & pads replacement, Full synthetic oil service", cost: "₹42,000" },
            { date: "2024-12-10", center: "Deutsche Motoren BMW, New Delhi", odometer: "52,000 km", maintenance: "Periodic maintenance & fluid flush", cost: "₹28,000" }
        ],
        mileageHistory: [
            { year: "2020", km: 0 },
            { year: "2021", km: 18000 },
            { year: "2022", km: 36000 },
            { year: "2023", km: 50000 },
            { year: "2024", km: 61000 },
            { year: "2025", km: 68000 },
            { year: "2026", km: 71000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Clearance Certificate Issued",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 78,
            engine: 82,
            maintenance: 80,
            mileageConsistency: 77,
            accidentIndicator: 78
        }
    },
    {
        id: 7,
        brand: "Mercedes-Benz",
        model: "C-Class C200",
        year: 2021,
        registrationNumber: "MH-02-EE-7777",
        vin: "SAMPLEVINMERC0007",
        fuelType: "Petrol",
        transmission: "Automatic",
        engineCapacity: "1497 cc",
        horsepower: "201 HP @ 5800 rpm",
        torque: "300 Nm @ 1800-4000 rpm",
        driveType: "Rear-Wheel Drive (RWD)",
        bodyType: "Sedan",
        color: "Obsidian Black",
        mileage: 48000,
        ownerCount: 1,
        healthScore: 86,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-04-10",
        pollutionExpiry: "2027-01-20",
        state: "Maharashtra (MH)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2021-04-20", endDate: "Present", type: "Individual", name: "Sunil Gavaskar Jr. (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2025-11-15", center: "Auto Hangar Mercedes, Mumbai", odometer: "44,000 km", maintenance: "Service B package, Spark plug change", cost: "₹34,000" }
        ],
        mileageHistory: [
            { year: "2021", km: 0 },
            { year: "2022", km: 15000 },
            { year: "2023", km: 28000 },
            { year: "2024", km: 39000 },
            { year: "2025", km: 45000 },
            { year: "2026", km: 48000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "No Active Loan",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 88,
            engine: 89,
            maintenance: 85,
            mileageConsistency: 84,
            accidentIndicator: 85
        }
    },
    {
        id: 8,
        brand: "Toyota",
        model: "Fortuner Legender",
        year: 2023,
        registrationNumber: "HR-26-DK-9000",
        vin: "SAMPLEVINTOYOTA08",
        fuelType: "Diesel",
        transmission: "Automatic",
        engineCapacity: "2755 cc",
        horsepower: "201 HP @ 3000 rpm",
        torque: "500 Nm @ 1600-2800 rpm",
        driveType: "4x4 / Rear-Wheel Drive",
        bodyType: "Full-Size SUV",
        color: "Pearl White with Black Roof",
        mileage: 39000,
        ownerCount: 1,
        healthScore: 91,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-07-25",
        pollutionExpiry: "2027-03-01",
        state: "Haryana (HR)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2023-07-15", endDate: "Present", type: "Individual", name: "Kuldeep Ahlawat (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2025-12-20", center: "Galaxy Toyota, Gurgaon", odometer: "35,000 km", maintenance: "Periodic maintenance, 4x4 grease & fluid replacement", cost: "₹16,500" }
        ],
        mileageHistory: [
            { year: "2023", km: 0 },
            { year: "2024", km: 18000 },
            { year: "2025", km: 32000 },
            { year: "2026", km: 39000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Clear",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 92,
            engine: 94,
            maintenance: 90,
            mileageConsistency: 91,
            accidentIndicator: 88
        }
    },
    {
        id: 9,
        brand: "Hyundai",
        model: "i20 Asta",
        year: 2022,
        registrationNumber: "KA-05-JL-3344",
        vin: "SAMPLEVINHYUNDAI09",
        fuelType: "Petrol",
        transmission: "Manual",
        engineCapacity: "1197 cc",
        horsepower: "82 HP @ 6000 rpm",
        torque: "115 Nm @ 4200 rpm",
        driveType: "Front-Wheel Drive (FWD)",
        bodyType: "Hatchback",
        color: "Polar White",
        mileage: 51000,
        ownerCount: 2,
        healthScore: 78,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2026-10-15",
        pollutionExpiry: "2026-08-10",
        state: "Karnataka (KA)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2022-02-10", endDate: "2024-05-12", type: "Individual", name: "Divya Ramesh (Sample)" },
            { startDate: "2024-06-01", endDate: "Present", type: "Individual", name: "Nithin Kumar (Sample)" }
        ],
        accidentHistory: [
            { date: "2023-11-20", description: "Rear fender dent repaired after reversing into pillar", severity: "Minor", status: "Repaired" }
        ],
        serviceHistory: [
            { date: "2026-02-10", center: "Trident Hyundai, Bengaluru", odometer: "49,000 km", maintenance: "Brake service, Filter replacement", cost: "₹4,800" }
        ],
        mileageHistory: [
            { year: "2022", km: 0 },
            { year: "2023", km: 21000 },
            { year: "2024", km: 38000 },
            { year: "2025", km: 46000 },
            { year: "2026", km: 51000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "No Active Loan",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 76,
            engine: 80,
            maintenance: 79,
            mileageConsistency: 77,
            accidentIndicator: 78
        }
    },
    {
        id: 10,
        brand: "Tata",
        model: "Harrier Dark Edition",
        year: 2023,
        registrationNumber: "TS-09-EK-5566",
        vin: "SAMPLEVINTATA0010",
        fuelType: "Diesel",
        transmission: "Automatic",
        engineCapacity: "1956 cc",
        horsepower: "168 HP @ 3750 rpm",
        torque: "350 Nm @ 1750-2500 rpm",
        driveType: "Front-Wheel Drive (FWD)",
        bodyType: "SUV",
        color: "Oberon Black",
        mileage: 33000,
        ownerCount: 1,
        healthScore: 87,
        registrationStatus: "Active (Sample)",
        insuranceExpiry: "2027-06-18",
        pollutionExpiry: "2027-04-12",
        state: "Telangana (TS)",
        vehicleClass: "Light Motor Vehicle (LMV)",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
        ownershipHistory: [
            { startDate: "2023-06-20", endDate: "Present", type: "Individual", name: "Kiran Reddy (Sample)" }
        ],
        accidentHistory: [],
        serviceHistory: [
            { date: "2025-10-05", center: "Concorde Motors, Hyderabad", odometer: "29,000 km", maintenance: "Periodic maintenance service, Wheel alignment", cost: "₹7,200" }
        ],
        mileageHistory: [
            { year: "2023", km: 0 },
            { year: "2024", km: 14000 },
            { year: "2025", km: 27000 },
            { year: "2026", km: 33000 }
        ],
        legalStatus: {
            theftRecord: "No Theft Record Reported",
            loanStatus: "Active Loan",
            alerts: "None"
        },
        healthMetrics: {
            exterior: 89,
            engine: 88,
            maintenance: 86,
            mileageConsistency: 85,
            accidentIndicator: 87
        }
    }
];

// App State Management
let currentSection = 'home-section';
let activeVehicleReport = null;
let filteredVehicles = [...vehiclesData];

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initSearchAndFilters();
    initHomeSection();
    loadFavoritesFromStorage();
    loadRecentFromStorage();
    renderFeaturedVehicles();
    
    // Check URL or Default Hash if any
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        switchSection(hash);
    }
});

/* ==========================================
   NAVIGATION & UI ROUTING
   ========================================== */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .logo');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            if (target) {
                switchSection(target);
                document.getElementById('mobile-menu').classList.remove('open');
            }
        });
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    const backBtn = document.getElementById('back-to-search-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            switchSection('search-section');
        });
    }

    const goToSearchFav = document.getElementById('go-to-search-from-fav');
    if (goToSearchFav) {
        goToSearchFav.addEventListener('click', () => {
            switchSection('search-section');
        });
    }
}

function switchSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(sec => {
        sec.classList.remove('active-section');
    });

    const targetSec = document.getElementById(sectionId);
    if (targetSec) {
        targetSec.classList.add('active-section');
        currentSection = sectionId;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        document.querySelectorAll('.nav-link').forEach(l => {
            if (l.getAttribute('data-target') === sectionId) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });

        if (sectionId === 'favorites-section') {
            renderFavoritesGrid();
        } else if (sectionId === 'search-section') {
            populateFilterDropdowns();
            filterAndRenderVehicles();
        }
    }
}

/* ==========================================
   DARK / LIGHT THEME TOGGLE
   ========================================== */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        showToast(isLight ? 'Switched to Light Theme' : 'Switched to Dark Theme', 'info');
    });
}

/* ==========================================
   TOAST NOTIFICATIONS
   ========================================== */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'info') icon = 'fa-circle-info';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

/* ==========================================
   HOME PAGE LOGIC & SEARCH
   ========================================== */
function initHomeSection() {
    const searchInput = document.getElementById('hero-search-input');
    const searchBtn = document.getElementById('hero-search-btn');

    const handleSearch = () => {
        const query = searchInput.value.trim();
        if (!query) {
            showToast('Please enter a registration number, VIN, or model name.', 'error');
            return;
        }
        performVehicleSearch(query);
    };

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    document.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-search');
            searchInput.value = query;
            performVehicleSearch(query);
        });
    });
}

function renderFeaturedVehicles() {
    const grid = document.getElementById('featured-vehicles-grid');
    if (!grid) return;
    
    const featured = vehiclesData.slice(0, 4);
    grid.innerHTML = featured.map(v => createVehicleCardHTML(v)).join('');
    attachCardListeners(grid);
}

/* ==========================================
   VEHICLE SEARCH & SPECIFICATION API CHECKER
   ========================================== */
async function performVehicleSearch(rawQuery) {
    const query = rawQuery.toLowerCase().replace(/\s+/g, '');
    showToast('Querying vehicle & live specs database...', 'info');

    // Optional dynamic enhancement: Try querying public specification feed if connected
    try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${rawQuery}?format=json`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.Results && data.Results.length > 0) {
                const item = data.Results[0];
                if (item.Make && item.Model && item.ModelYear) {
                    console.log("Live VIN Decoder matched spec:", item.Make, item.Model);
                }
            }
        }
    } catch (err) {
        console.log("Using local database matching engine fallback.");
    }

    setTimeout(() => {
        const found = vehiclesData.find(v => {
            const reg = v.registrationNumber.toLowerCase().replace(/\s+/g, '');
            const vin = v.vin.toLowerCase().replace(/\s+/g, '');
            const brandModel = `${v.brand}${v.model}`.toLowerCase().replace(/\s+/g, '');
            const modelOnly = v.model.toLowerCase().replace(/\s+/g, '');
            const brandOnly = v.brand.toLowerCase().replace(/\s+/g, '');

            return reg.includes(query) || 
                   vin.includes(query) || 
                   brandModel.includes(query) || 
                   modelOnly.includes(query) || 
                   brandOnly.includes(query);
        });

        if (found) {
            openVehicleReport(found.id);
            showToast(`Report & specs loaded for ${found.brand} ${found.model}!`, 'success');
        } else {
            switchSection('search-section');
            const mainInput = document.getElementById('main-search-input');
            if (mainInput) mainInput.value = rawQuery;
            filterAndRenderVehicles();
            showToast('No exact vehicle found. Showing filtered results.', 'error');
        }
    }, 400);
}

/* ==========================================
   SEARCH, FILTER & SORTING SECTION
   ========================================== */
function initSearchAndFilters() {
    const mainSearchInput = document.getElementById('main-search-input');
    const filterBrand = document.getElementById('filter-brand');
    const filterYear = document.getElementById('filter-year');
    const filterFuel = document.getElementById('filter-fuel');
    const filterTransmission = document.getElementById('filter-transmission');
    const filterCondition = document.getElementById('filter-condition');
    const sortBy = document.getElementById('sort-by');
    const resetBtn = document.getElementById('reset-filters-btn');
    const emptyResetBtn = document.getElementById('empty-reset-btn');

    populateFilterDropdowns();
    filterAndRenderVehicles();

    const triggerUpdate = () => filterAndRenderVehicles();

    if (mainSearchInput) mainSearchInput.addEventListener('input', triggerUpdate);
    if (filterBrand) filterBrand.addEventListener('change', triggerUpdate);
    if (filterYear) filterYear.addEventListener('change', triggerUpdate);
    if (filterFuel) filterFuel.addEventListener('change', triggerUpdate);
    if (filterTransmission) filterTransmission.addEventListener('change', triggerUpdate);
    if (filterCondition) filterCondition.addEventListener('change', triggerUpdate);
    if (sortBy) sortBy.addEventListener('change', triggerUpdate);

    const resetAll = () => {
        if (mainSearchInput) mainSearchInput.value = '';
        if (filterBrand) filterBrand.value = '';
        if (filterYear) filterYear.value = '';
        if (filterFuel) filterFuel.value = '';
        if (filterTransmission) filterTransmission.value = '';
        if (filterCondition) filterCondition.value = '';
        if (sortBy) sortBy.value = 'default';
        filterAndRenderVehicles();
        showToast('Filters reset successfully.', 'info');
    };

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);
}

function populateFilterDropdowns() {
    const brands = [...new Set(vehiclesData.map(v => v.brand))].sort();
    const years = [...new Set(vehiclesData.map(v => v.year))].sort((a, b) => b - a);
    const fuels = [...new Set(vehiclesData.map(v => v.fuelType))].sort();
    const transmissions = [...new Set(vehiclesData.map(v => v.transmission))].sort();

    const brandSelect = document.getElementById('filter-brand');
    const yearSelect = document.getElementById('filter-year');
    const fuelSelect = document.getElementById('filter-fuel');
    const transSelect = document.getElementById('filter-transmission');

    if (brandSelect && brandSelect.options.length <= 1) {
        brands.forEach(b => brandSelect.add(new Option(b, b)));
    }
    if (yearSelect && yearSelect.options.length <= 1) {
        years.forEach(y => yearSelect.add(new Option(y, y)));
    }
    if (fuelSelect && fuelSelect.options.length <= 1) {
        fuels.forEach(f => fuelSelect.add(new Option(f, f)));
    }
    if (transSelect && transSelect.options.length <= 1) {
        transmissions.forEach(t => transSelect.add(new Option(t, t)));
    }
}

function filterAndRenderVehicles() {
    const query = document.getElementById('main-search-input')?.value.toLowerCase().trim() || '';
    const brand = document.getElementById('filter-brand')?.value || '';
    const year = document.getElementById('filter-year')?.value || '';
    const fuel = document.getElementById('filter-fuel')?.value || '';
    const trans = document.getElementById('filter-transmission')?.value || '';
    const condition = document.getElementById('filter-condition')?.value || '';
    const sort = document.getElementById('sort-by')?.value || 'default';

    filteredVehicles = vehiclesData.filter(v => {
        const matchesQuery = !query || 
            v.brand.toLowerCase().includes(query) ||
            v.model.toLowerCase().includes(query) ||
            v.registrationNumber.toLowerCase().includes(query) ||
            v.vin.toLowerCase().includes(query);

        const matchesBrand = !brand || v.brand === brand;
        const matchesYear = !year || v.year.toString() === year;
        const matchesFuel = !fuel || v.fuelType === fuel;
        const matchesTrans = !trans || v.transmission === trans;

        let matchesCondition = true;
        if (condition === 'Excellent') matchesCondition = v.healthScore >= 90;
        else if (condition === 'Good') matchesCondition = v.healthScore >= 75 && v.healthScore < 90;
        else if (condition === 'Fair') matchesCondition = v.healthScore >= 60 && v.healthScore < 75;
        else if (condition === 'Needs Inspection') matchesCondition = v.healthScore < 60;

        return matchesQuery && matchesBrand && matchesYear && matchesFuel && matchesTrans && matchesCondition;
    });

    if (sort === 'year-desc') {
        filteredVehicles.sort((a, b) => b.year - a.year);
    } else if (sort === 'year-asc') {
        filteredVehicles.sort((a, b) => a.year - b.year);
    } else if (sort === 'mileage-asc') {
        filteredVehicles.sort((a, b) => a.mileage - b.mileage);
    } else if (sort === 'health-desc') {
        filteredVehicles.sort((a, b) => b.healthScore - a.healthScore);
    }

    renderSearchResults();
}

function renderSearchResults() {
    const grid = document.getElementById('search-results-grid');
    const countLabel = document.getElementById('results-count');
    const emptyState = document.getElementById('empty-state');
    if (!grid) return;

    if (countLabel) {
        countLabel.textContent = `Showing ${filteredVehicles.length} vehicle${filteredVehicles.length === 1 ? '' : 's'}`;
    }

    if (filteredVehicles.length === 0) {
        grid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        if (emptyState) emptyState.classList.add('hidden');
        grid.innerHTML = filteredVehicles.map(v => createVehicleCardHTML(v)).join('');
        attachCardListeners(grid);
    }
}

/* ==========================================
   VEHICLE CARD HTML & HELPERS
   ========================================== */
function createVehicleCardHTML(v) {
    const isFav = isVehicleFavorite(v.id);
    let healthColor = 'var(--success)';
    let conditionText = 'Excellent';
    if (v.healthScore < 90 && v.healthScore >= 75) { healthColor = 'var(--accent-blue)'; conditionText = 'Good'; }
    else if (v.healthScore < 75 && v.healthScore >= 60) { healthColor = 'var(--warning)'; conditionText = 'Fair'; }
    else if (v.healthScore < 60) { healthColor = 'var(--danger)'; conditionText = 'Needs Inspection'; }

    return `
        <div class="vehicle-card" data-id="${v.id}">
            <div class="vehicle-card-img-wrapper">
                <img src="${v.image}" alt="${v.brand} ${v.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'">
                <button class="fav-card-btn ${isFav ? 'active' : ''}" data-id="${v.id}" title="Save to Favorites">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                <div class="health-badge-chip">
                    <span class="health-dot" style="background-color: ${healthColor};"></span>
                    <span>${v.healthScore}/100 (${conditionText})</span>
                </div>
            </div>
            <div class="vehicle-card-body">
                <h3 class="vehicle-card-title">${v.year} ${v.brand} ${v.model}</h3>
                <div class="vehicle-reg-num"><i class="fa-solid fa-id-card"></i> ${v.registrationNumber}</div>
                <div class="vehicle-specs-grid">
                    <div class="spec-item"><i class="fa-solid fa-gas-pump"></i> <span>${v.fuelType}</span></div>
                    <div class="spec-item"><i class="fa-solid fa-gauge"></i> <span>${v.mileage.toLocaleString()} km</span></div>
                    <div class="spec-item"><i class="fa-solid fa-gears"></i> <span>${v.transmission}</span></div>
                    <div class="spec-item"><i class="fa-solid fa-bolt"></i> <span>${v.horsepower}</span></div>
                </div>
                <div class="vehicle-card-footer">
                    <button class="btn btn-primary btn-sm view-report-btn" data-id="${v.id}" style="width: 100%;">
                        <i class="fa-solid fa-file-lines"></i> View Full Specs & Report
                    </button>
                </div>
            </div>
        </div>
    `;
}

function attachCardListeners(container) {
    container.querySelectorAll('.view-report-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            openVehicleReport(id);
        });
    });

    container.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            const id = parseInt(card.getAttribute('data-id'));
            openVehicleReport(id);
        });
    });

    container.querySelectorAll('.fav-card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            toggleFavorite(id);
        });
    });
}

/* ==========================================
   VEHICLE DETAIL REPORT VIEW
   ========================================== */
function openVehicleReport(id) {
    const vehicle = vehiclesData.find(v => v.id === id);
    if (!vehicle) return;

    activeVehicleReport = vehicle;
    addToRecentlyViewed(vehicle);
    renderReportContent(vehicle);
    switchSection('report-section');

    updateReportFavoriteButton();
    const favToggleBtn = document.getElementById('favorite-toggle-btn');
    if (favToggleBtn) {
        const newBtn = favToggleBtn.cloneNode(true);
        favToggleBtn.parentNode.replaceChild(newBtn, favToggleBtn);
        newBtn.addEventListener('click', () => {
            toggleFavorite(vehicle.id);
            updateReportFavoriteButton();
        });
    }

    const printBtn = document.getElementById('print-report-btn');
    if (printBtn) {
        const newPrintBtn = printBtn.cloneNode(true);
        printBtn.parentNode.replaceChild(newPrintBtn, printBtn);
        newPrintBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

function updateReportFavoriteButton() {
    if (!activeVehicleReport) return;
    const isFav = isVehicleFavorite(activeVehicleReport.id);
    const btnText = document.getElementById('fav-btn-text');
    const btn = document.getElementById('favorite-toggle-btn');
    if (btnText && btn) {
        btnText.textContent = isFav ? 'Saved in Favorites' : 'Save to Favorites';
        btn.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        if (isFav) btn.classList.add('btn-primary'); else btn.classList.remove('btn-primary');
    }
}

function renderReportContent(v) {
    const wrapper = document.getElementById('report-content-wrapper');
    if (!wrapper) return;

    let healthColor = 'var(--success)';
    let conditionText = 'Excellent';
    if (v.healthScore < 90 && v.healthScore >= 75) { healthColor = 'var(--accent-blue)'; conditionText = 'Good'; }
    else if (v.healthScore < 75 && v.healthScore >= 60) { healthColor = 'var(--warning)'; conditionText = 'Fair'; }
    else if (v.healthScore < 60) { healthColor = 'var(--danger)'; conditionText = 'Needs Inspection'; }

    wrapper.innerHTML = `
        <!-- 1. Header Card -->
        <div class="report-header-card">
            <div class="report-vehicle-img">
                <img src="${v.image}" alt="${v.brand} ${v.model}" onerror="this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'">
            </div>
            <div class="report-title-meta">
                <div class="report-reg-badge"><i class="fa-solid fa-id-card"></i> ${v.registrationNumber}</div>
                <h1>${v.year} ${v.brand} ${v.model}</h1>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Comprehensive Factory Specifications & Simulated History Report</p>
                
                <div class="report-quick-specs">
                    <div class="quick-spec-item">
                        <span>Fuel Type</span>
                        <span>${v.fuelType}</span>
                    </div>
                    <div class="quick-spec-item">
                        <span>Transmission</span>
                        <span>${v.transmission}</span>
                    </div>
                    <div class="quick-spec-item">
                        <span>Odometer</span>
                        <span>${v.mileage.toLocaleString()} km</span>
                    </div>
                    <div class="quick-spec-item">
                        <span>Power Figures</span>
                        <span>${v.horsepower}</span>
                    </div>
                    <div class="quick-spec-item">
                        <span>Color Variant</span>
                        <span>${v.color}</span>
                    </div>
                    <div class="quick-spec-item">
                        <span>Owners</span>
                        <span>${v.ownerCount} Previous</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. Health Score Card -->
        <div class="health-score-card">
            <div class="section-header" style="margin-bottom: 20px;">
                <h2><i class="fa-solid fa-heart-pulse"></i> AI Vehicle Health Scorecard</h2>
                <p>Multi-point algorithmic inspection rating based on service records and wear diagnostics</p>
            </div>
            <div class="health-grid">
                <div class="overall-score-circle">
                    <div class="score-number">${v.healthScore}</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">OUT OF 100</div>
                    <div class="score-label-badge" style="background-color: ${healthColor}; color: #fff;">${conditionText}</div>
                </div>
                <div class="health-meters-list">
                    <div class="health-meter-item">
                        <div class="health-meter-header"><span>Exterior & Body Condition</span> <span>${v.healthMetrics.exterior}%</span></div>
                        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${v.healthMetrics.exterior}%; background-color: var(--success);"></div></div>
                    </div>
                    <div class="health-meter-item">
                        <div class="health-meter-header"><span>Engine & Transmission Performance</span> <span>${v.healthMetrics.engine}%</span></div>
                        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${v.healthMetrics.engine}%; background-color: var(--accent-blue);"></div></div>
                    </div>
                    <div class="health-meter-item">
                        <div class="health-meter-header"><span>Maintenance Adherence</span> <span>${v.healthMetrics.maintenance}%</span></div>
                        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${v.healthMetrics.maintenance}%; background-color: var(--success);"></div></div>
                    </div>
                    <div class="health-meter-item">
                        <div class="health-meter-header"><span>Mileage Consistency Check</span> <span>${v.healthMetrics.mileageConsistency}%</span></div>
                        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: ${v.healthMetrics.mileageConsistency}%; background-color: var(--warning);"></div></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. Report Sections Grid -->
        <div class="report-section-grid">
            <!-- Technical Specifications Data Sheet -->
            <div class="report-card">
                <h3><i class="fa-solid fa-gauge-high"></i> Technical & Power Specifications</h3>
                <table class="specs-table">
                    <tr><td>Engine Displacement</td><td>${v.engineCapacity}</td></tr>
                    <tr><td>Max Horsepower (HP)</td><td><span style="color: var(--accent-blue);">${v.horsepower}</span></td></tr>
                    <tr><td>Peak Torque</td><td>${v.torque}</td></tr>
                    <tr><td>Drivetrain Setup</td><td>${v.driveType}</td></tr>
                    <tr><td>Transmission Type</td><td>${v.transmission}</td></tr>
                    <tr><td>Body Style</td><td>${v.bodyType}</td></tr>
                    <tr><td>Exterior Color Variant</td><td>${v.color}</td></tr>
                </table>
            </div>

            <!-- Registration Details -->
            <div class="report-card">
                <h3><i class="fa-solid fa-file-contract"></i> Registration Details</h3>
                <table class="specs-table">
                    <tr><td>Registration State</td><td>${v.state}</td></tr>
                    <tr><td>Registration Status</td><td><span style="color: var(--success); font-weight: 700;">${v.registrationStatus}</span></td></tr>
                    <tr><td>Vehicle Class</td><td>${v.vehicleClass}</td></tr>
                    <tr><td>VIN / Chassis ID</td><td style="font-family: monospace; font-size: 0.8rem;">${v.vin}</td></tr>
                    <tr><td>Insurance Expiry</td><td>${v.insuranceExpiry}</td></tr>
                    <tr><td>Pollution Cert. Expiry</td><td>${v.pollutionExpiry}</td></tr>
                </table>
            </div>

            <!-- Ownership History -->
            <div class="report-card">
                <h3><i class="fa-solid fa-users-rectangle"></i> Ownership Trail</h3>
                <div class="timeline-list">
                    ${v.ownershipHistory.map(o => `
                        <div class="timeline-item">
                            <div class="timeline-header"><span>${o.startDate} — ${o.endDate}</span> <span>${o.type}</span></div>
                            <div class="timeline-title">${o.name}</div>
                            <div class="timeline-desc">Registered owner in ${v.state}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Accident & Damage History -->
            <div class="report-card">
                <h3><i class="fa-solid fa-car-burst"></i> Accident & Damage Records</h3>
                ${v.accidentHistory.length === 0 ? `
                    <div style="text-align: center; padding: 30px; color: var(--success);">
                        <i class="fa-solid fa-shield-check" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                        <p style="font-weight: 600;">No Accident Records Reported</p>
                        <p style="font-size: 0.85rem; color: var(--text-secondary);">This vehicle has a clean simulated accident history.</p>
                    </div>
                ` : `
                    <div class="timeline-list">
                        ${v.accidentHistory.map(a => `
                            <div class="timeline-item warning-border">
                                <div class="timeline-header"><span>Reported Date: ${a.date}</span> <span>Severity: ${a.severity}</span></div>
                                <div class="timeline-title">${a.description}</div>
                                <div class="timeline-desc">Status: ${a.status}</div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>

            <!-- Service & Maintenance History -->
            <div class="report-card">
                <h3><i class="fa-solid fa-screwdriver-wrench"></i> Service & Maintenance Log</h3>
                ${v.serviceHistory.length === 0 ? `
                    <p style="color: var(--text-secondary);">No service records available.</p>
                ` : `
                    <div class="timeline-list">
                        ${v.serviceHistory.map(s => `
                            <div class="timeline-item">
                                <div class="timeline-header"><span>${s.date}</span> <span>Odometer: ${s.odometer}</span></div>
                                <div class="timeline-title">${s.center}</div>
                                <div class="timeline-desc">${s.maintenance}</div>
                                <div style="margin-top: 6px; font-weight: 700; color: var(--accent-blue); font-size: 0.85rem;">Cost: ${s.cost}</div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>

            <!-- Mileage History Chart / Timeline -->
            <div class="report-card">
                <h3><i class="fa-solid fa-chart-line"></i> Mileage Progression History</h3>
                <div class="timeline-list" style="margin-top: 10px;">
                    ${v.mileageHistory.map(m => `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                            <span style="font-weight: 700; color: var(--text-secondary);">${m.year}</span>
                            <span style="font-weight: 800; color: var(--accent-blue);">${m.km.toLocaleString()} km</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/* ==========================================
   LOCALSTORAGE & FAVORITES MANAGEMENT
   ========================================== */
const FAV_STORAGE_KEY = 'autotrace_favorites_v1';
const RECENT_STORAGE_KEY = 'autotrace_recent_v1';

function getFavorites() {
    try {
        const data = localStorage.getItem(FAV_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function isVehicleFavorite(id) {
    const favs = getFavorites();
    return favs.includes(id);
}

function toggleFavorite(id) {
    let favs = getFavorites();
    const index = favs.indexOf(id);
    const vehicle = vehiclesData.find(v => v.id === id);

    if (index > -1) {
        favs.splice(index, 1);
        showToast(`Removed ${vehicle ? vehicle.model : 'vehicle'} from favorites.`, 'info');
    } else {
        favs.push(id);
        showToast(`Added ${vehicle ? vehicle.model : 'vehicle'} to favorites!`, 'success');
    }

    localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(favs));
    updateFavoritesBadge();

    if (currentSection === 'favorites-section') {
        renderFavoritesGrid();
    }
    document.querySelectorAll(`.fav-card-btn[data-id="${id}"]`).forEach(btn => {
        const isFav = favs.includes(id);
        btn.classList.toggle('active', isFav);
        btn.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    });
}

function updateFavoritesBadge() {
    const favs = getFavorites();
    const badge = document.getElementById('fav-badge');
    if (badge) {
        badge.textContent = favs.length;
    }
}

function loadFavoritesFromStorage() {
    updateFavoritesBadge();
}

function renderFavoritesGrid() {
    const favs = getFavorites();
    const grid = document.getElementById('favorites-grid');
    const empty = document.getElementById('favorites-empty');
    if (!grid || !empty) return;

    if (favs.length === 0) {
        grid.classList.add('hidden');
        empty.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        empty.classList.add('hidden');
        const favVehicles = vehiclesData.filter(v => favs.includes(v.id));
        grid.innerHTML = favVehicles.map(v => createVehicleCardHTML(v)).join('');
        attachCardListeners(grid);
    }
}

/* ==========================================
   RECENTLY VIEWED MANAGEMENT
   ========================================== */
function getRecentlyViewed() {
    try {
        const data = localStorage.getItem(RECENT_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function addToRecentlyViewed(vehicle) {
    let recent = getRecentlyViewed();
    recent = recent.filter(id => id !== vehicle.id);
    recent.unshift(vehicle.id);
    if (recent.length > 4) recent.pop();
    localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(recent));
    loadRecentFromStorage();
}

function loadRecentFromStorage() {
    const recentIds = getRecentlyViewed();
    const wrapper = document.getElementById('recent-viewed-wrapper');
    const grid = document.getElementById('recent-cards-grid');
    const clearBtn = document.getElementById('clear-recent-btn');
    if (!wrapper || !grid) return;

    if (recentIds.length === 0) {
        wrapper.classList.add('hidden');
        return;
    }

    wrapper.classList.remove('hidden');
    const recentVehicles = recentIds.map(id => vehiclesData.find(v => v.id === id)).filter(Boolean);
    grid.innerHTML = recentVehicles.map(v => createVehicleCardHTML(v)).join('');
    attachCardListeners(grid);

    if (clearBtn) {
        clearBtn.onclick = () => {
            localStorage.removeItem(RECENT_STORAGE_KEY);
            wrapper.classList.add('hidden');
            showToast('Recently viewed history cleared.', 'info');
        };
    }
}
