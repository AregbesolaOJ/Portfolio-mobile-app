import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { color } from '../styles';

export const UseModal = ({
  isOpen,
  bgStyle,
  wrapperStyle,
  component: Component,
  onClose,
  hideCloseIcon,
  loading,
  entity,
  ...props
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Modal
        transparent
        animationType="none"
        animated
        visible={isOpen}
        onRequestClose={onClose}
      >
        <View style={[styles.modalBackground, bgStyle]}>
          <View style={[styles.containerWrapper, wrapperStyle]}>
            {!hideCloseIcon && (
              <View style={{ position: 'absolute', right: 10, top: 10 }}>
                <TouchableOpacity onPress={() => onClose()}>
                  <Icon name="close" size={25} color={color.DARK} />
                </TouchableOpacity>
              </View>
            )}
            <Component entity={entity} close={onClose} {...props} />
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                color={color.PRIMARY}
                animating
                size={40}
                style={{ opacity: loading ? 1 : 0 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000040',
  },
  containerWrapper: {
    backgroundColor: color.WHITE,
    position: 'relative',
    paddingTop: 30,
    paddingHorizontal: 10
  },
  activityIndicatorWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
