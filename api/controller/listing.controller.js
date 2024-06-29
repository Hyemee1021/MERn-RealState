import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
    //201 means smth is created
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  //id is from route
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Lsiting has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  //id from route-req.user.id
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  //each listing has useRef- user id who made the listing
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings."));
  }

  try {
    const updateListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updateListing);
  } catch (error) {
    next(error);
  }
};
