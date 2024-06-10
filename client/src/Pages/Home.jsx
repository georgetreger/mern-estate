import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react'
 import { Navigation } from "swiper/modules";
import SwiperCore from 'swiper'

import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [OfferListing, setOfferListing] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListing, setRentListing] = useState([]);
      SwiperCore.use([Navigation])
  console.log(OfferListing);
  console.log(rentListing);
  console.log(saleListing);
  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListing(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListing(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListing(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListing();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-5 p-28 px-5 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          we help you, find your
          <br />
          <span className="text-slate-400"> dream </span>
          house.
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          are you looking for a peacefull and nice place to live? <br />
          well look know further kwame Estate is the place to live!
          <br />
          We have a wide rang of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-blue-500 text-xs 
         sm:text-sm font-bold hover:underline"
        >
          let start now
        </Link>
      </div>
      <Swiper navigation>
        {OfferListing &&
          OfferListing.length > 0 &&
          OfferListing.map((listing) => 
          <SwiperSlide>
            <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize:'cover'}} className="h-[500px]" key={listing.id}>

            </div>
          </SwiperSlide>
        )}
      </Swiper>
        <div className="max-w-6xl mx-auto flex flex-col gap-8 my-10">
          {
            OfferListing && OfferListing.length> 0 &&(
               <div className="">
                <div className="my-5">
                   <h2 className="text-2xl font-semibold text-slate-600">Recent offers</h2>
                    <Link to={'/search?offer=true'} className="hover:underline text-sm text-blue-800 ">
                      Show more offer
                    </Link>
                </div>
                <div className="flex flex-wrap gap-5">
                  {
                    OfferListing.map((listing)=>(
                      <ListingItem listing={listing} key={listing._id}/>
                    ))
                  }
                </div>
               </div>
            )
          }

          {
            rentListing && rentListing.length> 0 &&(
               <div className="">
                <div className="my-5">
                   <h2 className="text-2xl font-semibold text-slate-600">Recent places for rent</h2>
                    <Link to={'/search?type=rent'} className="hover:underline text-sm text-blue-800 ">
                      Show more for rent
                    </Link>
                </div>
                <div className="flex flex-wrap gap-5">
                  {
                    rentListing.map((listing)=>(
                      <ListingItem listing={listing} key={listing._id}/>
                    ))
                  }
                </div>
               </div>
            )
          }
          {
            saleListing && saleListing.length> 0 &&(
               <div className="">
                <div className="my-5">
                   <h2 className="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
                    <Link to={'/search?type=sale'} className="hover:underline text-sm text-blue-800 ">
                      Show more places for sale
                    </Link>
                </div>
                <div className="flex flex-wrap gap-5">
                  {
                    saleListing.map((listing)=>(
                      <ListingItem listing={listing} key={listing._id}/>
                    ))
                  }
                </div>
               </div>
            )
          }
        </div>
    </div>
  );
}
