export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: 8754444875,
    //   msg: '',
    };
  }
  sendOnWhatsApp=() => {
    // let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if(mobile){
        let url = 'whatsapp://send?phone=91=' + mobile;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });
    //   else{
    //     alert('Please insert message to send');
    //   }
    }
    // else{
    //   alert('Please insert mobile no');
    // }
  }

  call = () => {
      //handler to make a call
      const args = {
        number: '8754444875',
        prompt: false,
      };
      call(args).catch(console.error);
    };
  render() {
    return (
      <View style={styles.container}>
    
<View>
                <Title>About</Title>
                </View>
                <View>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                        In 2017 we started,We are the leading experts in that service, we are done and doing so many
                        services for everyone who needs our Help
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     we are give the best for you and also we done in a correct time for your need
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     If you have any struggle during registration or any other trouble kindly contact us 8754444875
                    </Text>
                    <Text style={{paddingLeft:35,marginTop:10}}>
                     Thank you  
                    </Text>
                </View>
        <View style={{marginTop:20}}>
          {/* <Button
            onPress={this.sendOnWhatsApp}
            title= 'Send WhatsApp Message'
            /> */}
          <Text style={{fontSize:14,fontWeight:'bold'}}>If any Enquiry you can contact immediately here</Text>
          <View style={styles.iconView}>
          <TouchableOpacity  onPress={this.sendOnWhatsApp}>
              <Image
                  style={styles.whatsap_logo}
                  source={require('../assets/whatsapp.png')}/>
          </TouchableOpacity>
          <Text style={{marginTop:20}}> Msg or Call</Text>
          <TouchableOpacity  onPress={this.call}>
              <Image
                  style={styles.phone_logo}
                  source={require('../assets/phone.png')}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
