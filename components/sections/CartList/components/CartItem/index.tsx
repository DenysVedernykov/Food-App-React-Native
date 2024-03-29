import { Image, View } from "react-native";

import {
  typographyStyle_i12,
  typographyStyle_i17,
} from "../../../../../constants";
import { ICartItem } from "../../../../../types";
import { formatMoney } from "../../../../../utils";
import { Typography } from "../../../../common";
import { Stepper } from "../Stepper";
import styles from "./styles";
import { ImagePlaceholder } from "../../../ImagePlaceholder";

interface ICartItemProps {
  item: ICartItem;
  onAddToCart: (item: ICartItem) => void;
  onRemoveFromCart: (id: string) => void;
}

export const CartItem: React.FC<ICartItemProps> = ({
  item,
  onAddToCart,
  onRemoveFromCart,
}) => {
  function setProductQuantityHandler(value: number) {
    onAddToCart({ ...item, quantity: value });
  }

  function removeFromCartHandler() {
    onRemoveFromCart(item.product.id);
  }

  return (
    <View style={styles.wrapperContainer}>
      <ImagePlaceholder
        style={styles.imageProduct}
        imageUrl={item.product.imageUrl}
      />

      <View style={styles.info}>
        <Typography
          style={typographyStyle_i17}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.product.name}
        </Typography>

        <View style={styles.container}>
          <Stepper
            onRemove={removeFromCartHandler}
            onValueChanged={setProductQuantityHandler}
          >
            {item.quantity}
          </Stepper>

          <Typography style={typographyStyle_i12}>
            {formatMoney(item.product.price * item.quantity)}
          </Typography>
        </View>
      </View>
    </View>
  );
};
