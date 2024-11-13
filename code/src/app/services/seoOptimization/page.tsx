"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const seoOptimizationData = [
  {
    label: "On-Page SEO",
    stepNumber: "01",
    title: "Boost Your Online Presence",
    description:
      "Our SEO optimization services are designed to improve your website’s visibility on search engines, helping you attract more organic traffic and potential customers.",
    buttonText: "Discover More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
    extraText: "SEO Optimization",
  },
  {
    label: "Local SEO Services",
    stepNumber: "02",
    title: "Dominate Local Searches",
    description:
      "We optimize your website for local search results, ensuring that your business appears in front of the right people at the right time in your local area.",
    buttonText: "Learn More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1920&q=80",
    extraText: "Local SEO",
  },
  {
    label: "Technical SEO",
    stepNumber: "03",
    title: "Optimize Website Performance",
    description:
      "Our technical SEO services ensure your website is optimized for speed, mobile-friendliness, and search engine crawling, improving your site's overall performance.",
    buttonText: "Optimize Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    extraText: "Technical SEO",
  },
  {
    label: "Content Optimization",
    stepNumber: "04",
    title: "Create SEO-Friendly Content",
    description:
      "We help you create high-quality, keyword-optimized content that attracts search engines and engages your target audience, driving more traffic to your website.",
    buttonText: "Start Writing",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
    extraText: "Content SEO",
  },
  {
    label: "Link Building",
    stepNumber: "05",
    title: "Increase Your Authority",
    description:
      "Our link-building strategies focus on acquiring high-quality backlinks from reputable websites to boost your domain authority and improve your search engine rankings.",
    buttonText: "Build Links",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d6c?auto=format&fit=crop&w=1920&q=80",
    extraText: "Link Building",
  },
];


const SEOOptimization = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={seoOptimizationData} />
      <ServiceNavigation
        previousService={{ name: "Website Development", link: "/services/websiteDevelopment" }}
        nextService={{ name: "Social Media Management", link: "/services/socialMediaManagement" }}
      />
      <Footer />
    </div>
  );
};

export default SEOOptimization;
