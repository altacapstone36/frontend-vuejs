<template>
<div class="container my-2">
        <div class="d-flex text-center">
            <img src="@/assets/Icon/add doctor schedule.svg" width="70"/>
            <h3 class="textmargin">ADD DOCTOR SCHEDULE</h3>
        </div>
        <div class="d-block">
            <b-card bg-variant="light" class="card text-center mx-2 my-2 text-purple">
            <b-form @submit="onSubmit" @reset="onReset">
    <table class="table table-borderless">
        <tbody>
                        <tr class="tablerow">
                <td><p class="textmargin">Jenis Poli</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="poli"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Nama Dokter</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="dokter"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>

             <tr class="tablerow">
                <td><p class="textmargin">Pilih Hari</p></td>
                <td>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                </td>
            </tr>
            <tr class="tablerow">
                <td><p class="textmargin">Pilih Sesi</p></td>
                <td>
                <b-form-select
                        id="input-3"
                        v-model="food"
                        :options="sesi"
                        required
                        class="w-100"
                      ></b-form-select>
                </td>
            </tr>
                    </tbody>

    </table>
    <div class="d-flex mx-2 justify-content-end">
    <b-button type="submit"  class="unguprimary btnset">Submit</b-button>
    </div>
    </b-form>
        </b-card>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'adddoctorSchedule',
    data() {
      return {
        name: '',
        food: null,
      poli: [{ text: 'Pilih Poli', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      sesi: [{ text: 'Pilih Sesi', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      dokter: [{ text: 'Pilih Dokter', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],


            }
    }
}
</script>