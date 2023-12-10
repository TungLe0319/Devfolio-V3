<template>
  <div class="min-h-screen">
    <SectionHeader header="< Contact />" />
    <div class="flex items-center justify-center px-20">
      <div class="w-2/3">
        <h2 class=" text-8xl font-bold ">Have an idea? <br>
          Let's bring it to life.</h2>
        <h3 class=" text-4xl  opacity-50">
          I am currently not available for freelance work. I am accepting new projects starting from February 2022.
        </h3>
        <div class="">
               <v-form @submit.prevent>
              <v-container>
                <v-row class="mb-4">
                  <v-col cols="12" md="6">
                    <v-text-field v-model="firstName" :rules="firstNameRules" label="Your name"
                      color="orange-lighten-2"></v-text-field>
                  </v-col>
              
                  <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Your email" :rules="emailRules" color="orange-lighten-2"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="subject" label="Subject" :rules="subjectRules"
                      color="orange-lighten-2"></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea v-model="content" :rules="contentRule" clearable label="Your message"
                  color="orange-lighten-2"></v-textarea>
               <div class=" w-fit">
                 <v-btn type="submit" variant="outlined" block color="orange-lighten-2" class="mt-2  ">Send a message</v-btn>
               </div>
              </v-container>
            </v-form>
        </div>
      </div>
      <div class="w-1/3">
        <div class="">Contact Details</div>
        <div class="">Email: <a href="mailto:

        ">@gmail.com</a></div>
        <div class="">
          <div class="">Socials</div>
         <SocialIconList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const subject = ref('');
const content = ref('')
const requiredRule = (value:any) => value ? true : 'This field is required.';
const emailRule = (value:any) => /.+@.+\..+/.test(value) || 'Enter a valid email address.';

const firstNameRules = [requiredRule];
const lastNameRules = [requiredRule];
const emailRules = [requiredRule, emailRule];
const subjectRules = [requiredRule];
const contentRule = [requiredRule];

</script>

<style></style>