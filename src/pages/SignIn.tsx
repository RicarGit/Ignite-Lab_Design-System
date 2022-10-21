import 'styles/global.css'

import { Envelope, Lock } from 'phosphor-react'
import { Logo } from 'Assets/Logo'

import {
  Button,
  Checkbox,
  Heading,
  Text,
  TextInput } from 'components'

export function SignIn() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <Logo />

      <header className='flex flex-col items-center'>
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className=' mt-1 text-gray-400'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='mt-10 flex flex-col gap-4 items-stretch w-full max-w-sm'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size='lg' className='text-gray-200 font-semibold'>
            Endereço de e-mail
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Digite seu email aqui!' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text size='lg' className='text-gray-200 font-semibold'>
            Sua senha
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='***********' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200 cursor-pointer'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="/#" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>

        <Text asChild size='sm'>
          <a href="/#" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}