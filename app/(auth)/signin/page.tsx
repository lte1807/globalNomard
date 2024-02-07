/* eslint-disable prettier/prettier */
'use client';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import Input from '../../_components/input/Input';
import * as S from '@/(auth)/sign.style';
import { useForm } from 'react-hook-form';

function Page() {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <Input
          title="이메일"
          name="email"
          placeholder="이메일을 입력해 주세요"
          type="email"
          control={control}
          rules={{ required: 'This field is required' }}
        />
        <Input
          title="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          control={control}
          rules={{ required: 'This field is required' }}
        />
      </S.Form>
      <PlainButton style="primary" height="4.8rem" roundSize="M">
        로그인 하기
      </PlainButton>
      <S.Info>
        회원이 아니신가요? <S.Span>회원가입하기</S.Span>
      </S.Info>
    </S.Wrapper>
  );
}

export default Page;