import React, { useCallback, useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'
import TextComp from '../../Components/TextComp'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import { FlashList } from '@shopify/flash-list'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import imagePath from '../../constants/imagePath'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'

const CreatePost = () => {
  const [posts, setPosts] = useState([
    {}, {}, {}
  ])
  const renderItem = useCallback(({ item, index }) => {
    return (
      <TouchableOpacity  activeOpacity={0} onPress={() => Alert.alert('Coming Soon')}>
        <View style={styles.boxStyle}>
          <View style={styles.ImgContainer}>
            <Image source={imagePath.DestinationImg} style={{ width: 120, height: 110 }} />
          </View>
          <TextComp
            text={'Turkey'}
            style={{
              fontSize: textScale(12),
              fontFamily: FontFamily.Poppins_Regular,
              marginTop: moderateScaleVertical(10)
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Image source={imagePath.ProfileImg} style={{ height: 20, width: 20, borderRadius: 20 }} />
            <TextComp
              text={'Mazhar'}
              style={{
                fontSize: textScale(12),
                fontFamily: FontFamily.Poppins_Regular,
                marginLeft: moderateScaleVertical(5)
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={imagePath.icHeart} style={{ height: 20, width: 20 }} />
            <TextComp
              text={'4.7'}
              style={{
                fontSize: textScale(12),
                fontFamily: FontFamily.Poppins_Regular,
                marginLeft: moderateScaleVertical(5)
              }}
            />
          </View>
          <TextComp
            text={'$458/'}
            style={{
              fontSize: textScale(12),
              fontFamily: FontFamily.Poppins_Regular,
              color: custom_Colors.themeColor
            }}
          ><Text style={{ color: custom_Colors.blackColor }}>Person</Text></TextComp>
        </View>
      </TouchableOpacity>

    )
  }, [posts])
  const listEmptyComp = () => {
    return (
      <View style={styles.ListEmptyContainer}>
        <TextComp
          text='No data found'
          style={{
            ...styles.notDataFound,
          }}
        />
      </View>
    )
  }

  return (
    <WrapperContainer>
      <HeaderComp
        centerText={'Popular Place'}
        rightText
      />
      <ScrollView style={{ margin: moderateScale(16) }} showsVerticalScrollIndicator={false}>
        <TextComp
          text={'All Popular Places'}
          style={{
            fontSize: textScale(18),
            fontFamily: FontFamily.Poppins_SemiBold,
            marginLeft: moderateScaleVertical(5),
            marginVertical:moderateScale(15)
          }}
        />
        <FlashList
          data={posts}
          renderItem={renderItem}
          estimatedItemSize={200}
          ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
          ListEmptyComponent={listEmptyComp}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </ScrollView>
    </WrapperContainer>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: custom_Colors.whiteColor,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    elevation: 5,
    margin: moderateScale(8),
  },
  ImgContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  TextCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScaleVertical(10)
  },
  TextCardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  BottomCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScaleVertical(10)
  },
  BottomCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BottomLeftImg: {
    tintColor: custom_Colors.blackColor,
    width: 20,
    height: 20
  },
  ListEmptyContainer: {
    alignItems: "center",
    marginTop: moderateScaleVertical(24)
  },
  notDataFound: {
    fontSize: textScale(24),
    fontFamily: FontFamily.regular,
  },
})