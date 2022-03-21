<template>
   <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign In</h1>

                <input
                    id="email"
                    v-model="email"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input 
                    id="password"
                    v-model="password"
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />
                <button
                    @click="signUser()"
                    type="submit"
                    class="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                >Sign In</button>


            </div>

            <div class="text-grey-dark mt-6">
                Don't have an account? 
                <router-link :to="{name: 'signUp'}" class="no-underline border-b border-blue text-blue">
                    Sign In
                </router-link>.
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { supabase } from "@/supabase";

export default {
  data(){
    return{
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions('user', ["setUser"]),
    async signUser() {
      const { error, user } = await supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (user) {
        this.setUser(user);
      }
      else if (error) {
        console.log(error);
      }
	}
    }
}
</script>
