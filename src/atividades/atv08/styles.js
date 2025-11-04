import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: RFPercentage(1),
    backgroundColor: '#fff',
    borderRadius: RFPercentage(2),

  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    padding: RFPercentage(2),    
    width: '100%',
  },
});
