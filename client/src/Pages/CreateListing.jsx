import React from "react";

export default function CreateListing() {
  return (
    <main className="max-w-4xl p-3 mx-auto">
      <h1 className="txet-3xl font-semibold text-center my-7 uppercase">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            id="name"
            maxLength="62"
            minLength="10"
            required
            placeholder="Name"
            className="border p-3 rounded-lg outline-none"
          />
          <input
            type="text"
            id="discription"
            required
            placeholder="Discription"
            className="border p-3 rounded-lg outline-none"
          />
          <input
            type="text"
            id="address"
            required
            placeholder="Address"
            className="border p-3 rounded-lg outline-none"
          />
          <div className="flex flex-wrap gap-5">
            <div className=" flex gap-2">
              <input type="checkbox" id="Sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded outline-none"
              />
              <p>Beds</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded outline-none"
              />
              <p>Baths</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularprice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded outline-none"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs ">($/month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountprice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-400 rounded outline-none"
              />
              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span className="text-xs ">($/month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex1 gap-5">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-500 ml-2">
              The first image will be the back cover (max 6)
            </span>
          </p>
          <div className="flex gap-2">
            <input
              className="p-3 border border-gray-400 rounded-lg w-full"
              type="file"
              id="file"
              accept="image/*"
              multiple
            />
            <button className="p-3 border border-green-700 text-green-700 rounded uppercase hover:shadow-xl disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="disabled:opacity-80 bg-green-700 p-3 rounded-lg uppercase text-white hover:opacity-95">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
