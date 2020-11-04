<template>
  <div>
    <h3>Personal information</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Full name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Street Address:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.address"
          required
          placeholder="Enter address"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="City:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.city"
          required
          placeholder="Enter city"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Zip code:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.zip"
          required
          placeholder="Enter zip code"
        ></b-form-input>
      </b-form-group>

      <b-form-group> 
        <div>
          <label for="birth-datepicker">Birth date (mm/dd/yyyy):</label>
          <b-form-datepicker id="birth-datepicker" v-model="form.birth" class="mb-2"></b-form-datepicker>
        </div>
      </b-form-group>

      <b-form-group label="Gender">
        <b-form-radio-group id="radio-group-1" v-model="form.gender" name="radio-sub-component">
          <b-form-radio value="Female">Female</b-form-radio>
          <b-form-radio value="Male">Male</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Grade:">
        <b-form-select v-model="form.grade" class="mb-3">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option v-for="(grade,index) in grades" :key="index" :value="grade">{{grade}}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <h3>Contact information</h3>
      <b-form-group id="input-group-6" label="Parent/Guardian:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.parent"
          required
          placeholder="Enter name and last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Contact phone:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="form.contactphone"
          required
          placeholder="Enter phone number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Contact email:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.contactemail"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <h3>Additional information</h3>
      <p>Which elementary schools do you live near:</p>
      <b-form-group label="First closest school">
        <b-form-select v-model="form.school1" class="mb-3">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option v-for="(school,index) in schools" :key="index" :value="school">{{school}}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group label="Second closest school">
        <b-form-select v-model="form.school2" class="mb-3">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option v-for="(school,index) in schools" :key="index" :value="school">{{school}}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-9" label="What position(s) do you normally play? (check all that apply)">
        <b-form-checkbox-group v-model="form.positionsplayed" id="checkboxes-1">
          <b-form-checkbox v-for="(pos,index) in positions" :key="index" :value="pos">{{pos}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="input-group-10" label="What position(s) do you want play? (check all that apply)">
        <b-form-checkbox-group v-model="form.desiredpositions" id="checkboxes-2">
          <b-form-checkbox v-for="(pos,index) in positions" :key="index" :value="pos">{{pos}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <p>Uniform information: </p>

      <b-form-radio v-model="form.hasuniform" value="True">Already have a uniform</b-form-radio>

      <b-form-group label="Jersey size:">
        <b-form-select v-model="form.jerseysize" class="mb-3">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option v-for="(size,index) in sizes" :key="index" :value="size">{{size}}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group label="Shorts size">
        <b-form-select v-model="form.shortssize" class="mb-3">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option v-for="(size,index) in sizes" :key="index" :value="size">{{size}}</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <h3>Permission to play</h3>
      <p>I, the parent or guardian of the minor registrant, agree that the registrant and I will abide by all the rules of the Northside Youth
      Soccer League (NYSL). In recognizing the possibility of physical injury associated with soccer and in consideration for the “League”
      accepting the registrant for its soccer programs and activities, I hereby release, discharge, and/or otherwise indemnify NYSL, their
      employees and associated personnel and volunteers, including the facilities used for practices and games, against any claim by or
      on behalf of the registrant as a result of the registrant’s participation in the program and/or being transported to or from NYSL
      sponsored activities, which transportation.
      By signing below, I hereby agree and authorize the above. In addition, by signing below, I also acknowledge that I have read the
      cancellation policy and agree to its terms.</p>

      <b-form-group id="input-group-9" label="Parent/guardian signature:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="form.signature"
          required
          placeholder="Enter your signature"
        ></b-form-input>
      </b-form-group>

      <b-form-group> 
        <div>
          <label for="birth-datepicker">Date: </label>
          <b-form-datepicker id="birth-datepicker" v-model="form.birth" class="mb-2"></b-form-datepicker>
        </div>
      </b-form-group>

      <b-button pill type="submit" variant="primary">Submit</b-button>
      <b-button  pill type="reset" variant="secondary">Reset</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
  name: 'Form',
  components: {
  },
  data: function() {
    return {
      grades: ['Pre-school', '1st', '2nd', '3rd', '4th', '5th'],
      schools: ['AJ Katzenmaier', 'Marjorie P Hart', 'Greenbay','North Elementary', 'Howard A Yeager', 'South Elementary'],
      positions: ['Forward', 'Midfield', 'Defense', 'Goalkeeper'],
      sizes: ['Youth Small', 'Youth Medium','Youth Large','Large', 'Medium', 'Extra-large'],
      form: {
        name: '',
        lastname: '',
        address: '',
        city: '',
        zip: '',
        birth: '',
        gender: '',
        grade: null,
        parent: '',
        contactphone: '',
        contactemail: '',
        school1: null,
        school2: null,
        positionsplayed: [],
        desiredpositions: [],
        hasuniform: '',
        jerseysize: null,
        shortssize: null,
        signature: '',
        date: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = '',
      this.form.lastname = '',
      this.form.address = '',
      this.form.city = '',
      this.form.zip = '',
      this.form.birth = '',
      this.form.gender = '',
      this.form.grade = null,
      this.form.parent = '',
      this.form.contactphone = '',
      this.form.contactemail = '',
      this.form.school1 = null,
      this.form.school2 = null,
      this.form.positionsplayed = [],
      this.form.desiredpositions = [],
      this.form.hasuniform = '',
      this.form.jerseysize = null,
      this.form.shortssize = null,
      this.form.signature = '',
      this.form.date = '',
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    font-weight: 600;
    margin-right: 2rem;
  }

  .btn-primary{
    background-color: #100080;
    border-color: #100080;
  }

  h3{
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-size: 18px;
      letter-spacing: 3px;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
  }

  .mb-3{
    margin-bottom: 0 !important;
  }
</style>