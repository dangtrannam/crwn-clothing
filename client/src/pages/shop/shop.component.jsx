import React, { useEffect, useCallback } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

function ShopPage({ match }) {
  const dispatch = useDispatch();
  const fetchCollectionsStartHandler = useCallback(
    () => dispatch(fetchCollectionsStart()),
    [dispatch]
  );

  useEffect(() => {
    fetchCollectionsStartHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

export default ShopPage;
