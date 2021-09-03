import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopItems } from "../../redux/shop/shop.selectors";


function ShopPage({ collections }) {

  return (
    <div className="shop-page">
      {collections
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
});

export default connect(mapStateToProps)(ShopPage);
