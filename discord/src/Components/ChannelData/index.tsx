import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Henricky"
            date="20/06/2020"
            content="Apenas uma mensagem aleatória."
          />
        ))}

        <ChannelMessage
          author="GabriellyBC"
          date="20/06/2020"
          content={
            <>
              Oieee <Mention>@Henricky</Mention>
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
