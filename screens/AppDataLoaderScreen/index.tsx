import { RefreshControl, ScrollView } from "react-native";
import { FC, useState, useEffect } from "react";

import { useAppInitData } from "../../hooks";
import { containerStyles } from "../../constants";
import { EmptyView, LoaderView } from "../../components/sections";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";

type Props = HomeScreenProps<"AppDataLoader">;

export const AppDataLoaderScreen: FC<Props> = ({ navigation }) => {
  const [isRefreshingData, setIsRefreshingData] = useState<boolean>(false);

  const {
    isDataLoaded,
    errorMessage: errorMessageDataLoad,
    loadData,
  } = useAppInitData();

  async function onRefreshDataHandler() {
    setIsRefreshingData(true);

    await loadData();

    setIsRefreshingData(false);
  }

  useEffect(() => {
    if (isDataLoaded) {
      navigation.replace("Homepage");
    }
  }, [isDataLoaded]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={containerStyles.i2}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshingData}
            onRefresh={onRefreshDataHandler}
          />
        }
      >
        {errorMessageDataLoad ? (
          <EmptyView>{errorMessageDataLoad}</EmptyView>
        ) : (
          <LoaderView />
        )}
      </ScrollView>
    </>
  );
};
