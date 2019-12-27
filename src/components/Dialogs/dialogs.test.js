import {shallow} from 'enzyme';
import React from 'react';

import DialogItem from './DialogItem';
import {CurrentDialog} from './CurrentDialog';
import {Dialogs} from './Dialogs';

describe('DialogItem component', () => {
    let wrapper;
    let mockSetCurrentDialog;

    beforeEach(() => {

        mockSetCurrentDialog = jest.fn();

        const mockProps = {
            dialog: {
                id: 3,
                user: 'test user',
                lastMessage: 'test message',
                isRead: true,
                yourLast: false
            },
            setCurrentDialog: mockSetCurrentDialog
        };

        wrapper = shallow(<DialogItem {...mockProps} />)
    });

    it('renders DialogItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('calls setCurrentDialog on click', () => {
        wrapper.find('A').simulate('click');
        expect(mockSetCurrentDialog).toHaveBeenCalled();
    })
});

describe('CurrentDialog component' ,() => {
    let wrapper;
    let mockSendMessage;

    beforeEach(() => {
        mockSendMessage = jest.fn();

        const mockProps = {
            dialog: {
                messages: [
                    {id: 3, isYour: true, text: 'test text'}
                ],
                user: 'test user'
            },
            sendMessage: mockSendMessage
        };

        wrapper = shallow(<CurrentDialog {...mockProps} />);
    });

    it('renders CurrentDialog component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('calls sendMessage on click', () => {
        wrapper.find('button').simulate('click');
        expect(mockSendMessage).toHaveBeenCalled();
    })
});

describe('Dialogs component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            dialogs: [],
            setCurrentDialog: jest.fn(),
            isAuth: true
        };

        wrapper = shallow(<Dialogs {...mockProps} />);
    });

    it('renders Dialogs component', () => {
        expect(wrapper).toMatchSnapshot();
    })
});