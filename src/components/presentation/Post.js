import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';
const proPic = require('../../../Shane_Pro_Pic.jpeg');
const deathValley = require('../../../deathValley.jpg');
const lisbon = require('../../../lisbon.jpg');

class Post extends Component {
  // componentDidMount() {
  //   alert(Dimensions.get('window').width); --> width of 414
  // }

  constructor() {
    super();
    this.state = {
      liked: false,
      screenwidth: Dimensions.get('window').width,
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const imageSelection = this.props.item % 2 === 0 ? deathValley : lisbon;

    const heartIconColor = this.state.liked ? 'rgb(220,100, 110)' : null;

    return (
      <View style={{flex: 1, width: 100 + '%'}}>
        <View style={style.userBar}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image style={style.userPic} source={proPic} />
            <Text style={style.userName}>Shane</Text>
          </View>
          <View>
            <Text style={{fontSize: 30}}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.95}
          onPress={() => {
            this.likeToggled();
          }}>
          <Image
            style={{width: this.state.screenwidth, height: 425}}
            source={imageSelection}
          />
        </TouchableOpacity>

        <View style={style.iconBar}>
          <Image
            style={[
              style.icon,
              {height: 40, width: 36, tintColor: heartIconColor},
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[style.icon, {height: 40, width: 30}]}
            source={config.images.chatIcon}
          />
          <Image
            style={[
              style.icon,
              {height: 40, width: 34, transform: [{rotate: '270deg'}]},
            ]}
            source={config.images.sendIcon}
          />
        </View>
        <View style={style.iconBar}>
          <Image
            style={[style.icon, {height: 30, width: 30}]}
            source={config.images.heartIcon}
          />
          <Text>150 likes</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  commentBar: {
    backgroundColor: 'rgb(250,250,250)',
  },
  nav: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    marginTop: 40,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(233, 233, 233)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBar: {
    height: 45,
    width: 100 + '%',
    backgroundColor: 'rgb(250,250,250)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    marginLeft: 15,
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 70,
  },
});

export default Post;
