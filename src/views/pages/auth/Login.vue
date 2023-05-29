<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div v-if="registro">
                        <label for="dni1" class="block text-900 text-xl font-medium mb-2">DNI</label>
                        <InputText id="dni1" type="text" placeholder="dni address" class="w-full md:w-30rem mb-5"
                            style="padding: 1rem" v-model="dni" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true"
                            class="w-full mb-3" inputClass="w-full"></Password>
                        <div>
                            <Button label="Registrame!" link class="w-full p-2 text-xl" @click="registro = !registro"></Button>
                        </div>
                        <div class="pt-5">
                            <Button label="Iniciar sesion" class="w-full p-3 text-xl" @click="iniciarSesion"></Button>
                        </div>
                    </div>
                    <div v-else>
                        <label for="dni1" class="block text-900 text-xl font-medium mb-2">DNI</label>
                        <InputText id="dni1" type="text" placeholder="dni address" class="w-full md:w-30rem mb-5"
                        style="padding: 1rem" v-model="dni" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true"
                        class="w-full mb-3" inputClass="w-full"></Password>

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Confirm password</label>
                        <Password id="password1" v-model="confirmPassword" placeholder="Confirm Password" :toggleMask="true"
                        class="w-full mb-3" inputClass="w-full"></Password>

                        <div>
                            <Button label="Iniciar sesion!" link class="w-full p-2 text-xl" @click="registro = !registro"></Button>
                        </div>
                        <div class="pt-5">
                            <Button label="Registrarse!" class="w-full p-3 text-xl" @click="registrarse"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();

export default {
    data() {
        return {
            logoUrl: `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`,
            checked: false,
            password: '',
            dni: '',
            confirmPassword: '',
            registro: true,
        }
    },
    methods: {
        iniciarSesion() {
            console.log(import.meta.env.VITE_APP_BACK);
        },
        registrarse() {
            console.log(import.meta.env.VITE_APP_BACK);
        }
    },
}
</script>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}</style>
