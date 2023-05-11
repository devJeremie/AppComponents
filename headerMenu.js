import React, {Component} from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    spinCross() {
        if (!this.state.active) {
            Animated.spring(this.containerAnim, {
                toValue: 1
            }).start();
            Animated.spring(this.topBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: -10
            }).start();
            Animated.spring(this.middleBarOpacity, {
                toValue: 0,
                duration: 30
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.containerAnim, {
                toValue: 0
            }).start();
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4
            }).start();
            Animated.timing(this.middleBarOpacity, {
                toValue: 1,
                duration: 600
            }).start();
        }
    }
    _animate(active) {
        this.setState({active});
        const {props: {type}} = this;

        switch (type) {
            case "spinArrow":
                this.spinArrow();
                break;
            case "arrow":
                this.arrow();
                break;
            case "spinCross":
                this.spinCross();
                break;
            default:
                this.cross();
                break;
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            this._animate(nextProps.active);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                active: this.props.active
            });
        }, 0);
    }

    render() {

        const {props: {color, type}} = this;

        if (this.props.active) {
            if (type == "spinArrow") {
                this.containerAnim = this.containerAnim || new Animated.Value(1);
                this.topBar = this.topBar || new Animated.Value(1);
                this.bottomBar = this.bottomBar || new Animated.Value(1);
                this.width = this.width || new Animated.Value(14);
                this.marginLeft = this.marginLeft || new Animated.Value(-13);
                this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(2);
                this.topBarMargin = this.topBarMargin || new Animated.Value(-2);
            }
            return (
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.onPress ? this.props.onPress() : undefined
                    }}>
                    <Animated.View style={{
                        width: 35,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 35,
                        transform: [
                            {
                                rotate: this.containerAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '360deg'
                                    ],
                                })
                            }
                        ]
                    }}>
                            </Animated.View>
            </TouchableWithoutFeedback>
        );
}
    }}