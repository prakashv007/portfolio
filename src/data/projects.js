const projects = [
    {
        id: 1,
        title: 'DigiDrive – Digital Asset Management System',
        badge: 'Hackathon Project | MERN Stack',
        image: '/assets/digidrive.png',
        thumbBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
        placeholderLabel: '⭐ DigiDrive',
        description:
            'A digital asset platform where I applied structured data handling and database design principles. Focused on data flow between React.js and the MERN stack to ensure efficient file organization and retrieval.',
        tools: ['MongoDB', 'Express', 'React', 'Node.js'],
        links: {
            github: 'https://github.com/prakashv007/DigiDrive',
            live: 'https://digi-drive-ten.vercel.app/',
        },
    },
    {
        id: 2,
        title: 'Zomato Data Analytics Dashboard',
        badge: 'Power BI Project',
        image: '/assets/zomato.png',
        thumbBg: 'linear-gradient(135deg, #e23744 0%, #b71c1c 60%, #880e4f 100%)',
        placeholderLabel: '📊 Zomato Analytics',
        description:
            'Engineered a Power BI dashboard to analyze restaurant performance and customer rating trends. Cleaned complex datasets using Power Query to identify price-satisfaction correlations and top-performing chains.',
        tools: ['Power BI', 'Power Query'],
        githubLabel: 'View Project',
        links: {
            github: 'https://github.com/prakashv007/zomato-market-analytics-powerbi',
        },
    },
    {
        id: 3,
        title: 'Sales Data Insights Dashboard',
        badge: 'Excel-Based Data Analysis Project',
        image: '/assets/sales.png',
        thumbBg: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        placeholderLabel: '📈 Sales Analytics',
        description:
            'Analyzed 200+ sales records to identify regional and product performance trends. Built interactive Excel dashboards with pivot tables and trend analysis to provide actionable business insights.',
        tools: ['Excel', 'Pivot Tables'],
        githubLabel: 'View File',
        links: {
            github: 'https://github.com/prakashv007/Excel-Projects/blob/main/RetailSalesDashboard/RetailSalesDashboard_PivotTables.xlsx',
        },
    },
    {
        id: 4,
        title: 'SpicePot Restaurant Chain Analytics',
        badge: 'Operational Optimization Project',
        image: '/assets/spicepot.png',
        thumbBg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        placeholderLabel: '🥘 SpicePot Analytics',
        description:
            'Studied sales and delivery data for 25+ restaurants using IBM Cognos. Found ways to increase money by 8.7% and improved the menu by finding the best and worst-selling foods. Used clear reports to fix slow delivery and other problems.',
        tools: ['IBM Cognos Analytics', 'Sales Analytics', 'Menu Engineering'],
        links: {
            github: '',
        },
    },
];

export default projects;
