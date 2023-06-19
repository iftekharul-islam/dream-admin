import Sidebar from '@components/sidebar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { Button, Form, Input, Label, Spinner } from 'reactstrap'
import { addUser, getAllDepartment } from '../store'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const dispatch = useDispatch()

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    employee_id: '',
    designation_id: '',
    department_id: '',
    status: '',
    role:'',
    password: null
  }

  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(null)
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    employee_id: '',
    designation_id: '',
    department_id: '',
    status: '',
    role:'',
    password: null
  })

  const store = useSelector(state => state.users)

  useEffect(() => {   
    if (data?.division_id) dispatch(getAllDepartment(data?.division_id))
  }, [data?.division_id])

  // ** Function to handle form submit
  const onSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    const res = await dispatch(addUser(data))
    if (res?.payload?.success) {
      toggleSidebar()
    } else {
      setErrors(res?.payload?.error?.errors)
    }
    setLoading(false)      
  }

  const onChangeText = (e) => {        
    setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={() => setData(defaultValues)}
    >
      <Form>
        <div className='mb-1'>
          <Label className='form-label' for='name'>
            Name <span className='text-danger'>*</span>
          </Label>
          <Input id='name' placeholder='Name' name='name' onChange={onChangeText} value={data?.name}/>
          {errors?.name && <p className="text-danger">{errors?.name}</p>}
        </div>    
        <div className='mb-1'>
          <Label className='form-label' for='name'>
            Employee ID <span className='text-danger'>*</span>
          </Label>
          <Input id='employee_id' name='employee_id' placeholder='V101' onChange={onChangeText} value={data?.employee_id}/>
          {errors?.employee_id && <p className="text-danger">{errors?.employee_id}</p>}
        </div>        
        <div className='mb-1'>
          <Label className='form-label' for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
                type='email'
                id='email'
                name='email'
                placeholder='user@viserx.com'                
                onChange={onChangeText} 
                value={data?.email}
              />         
          {errors?.email && <p className="text-danger">{errors?.email}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='phone'>
            Phone 
          </Label>
          <Input
                type='number'
                id='phone'
                name='phone'
                placeholder='016-XX-XXXXXX'
                onChange={onChangeText} 
                value={data?.phone}
              />        
          {errors?.phone && <p className="text-danger">{errors?.phone}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-designation_id'>
            Select Designation 
          </Label>
              <Select
                isClearable={false}
                value={store.designationOptions?.find(item => item?.value === data?.designation_id)}
                options={store.designationOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Designation'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'designation_id'}})                
                }}
              />
          {errors?.designation_id && <p className="text-danger">{errors?.designation_id}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-division'>
            Select Division <span className='text-danger'>*</span>
          </Label>
          <Select
                isClearable={false}
                value={store.divisionOptions?.find(item => item?.value === data?.division_id)}
                options={store.divisionOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Division'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'division_id'}})                
                }}
              />
          {errors?.division_id && <p className="text-danger">{errors?.division_id}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-department_id'>
            Select Department <span className='text-danger'>*</span>
          </Label>
          <Select
                isClearable={false}
                value={store.departmentOptions?.find(item => item?.value === data?.department_id)}
                options={store.departmentOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Department'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'department_id'}})                
                }}
              />
          {errors?.department_id && <p className="text-danger">{errors?.department_id}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-role'>
            Select Role <span className='text-danger'>*</span>
          </Label>
          <Select
                isClearable={false}                
                value={store.roleOptions?.find(item => item?.value === data?.role)}
                options={store.roleOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Role'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'role'}})                 
                }}
              />
          {errors?.role && <p className="text-danger">{errors?.role}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-supervisor_id'>
            Select Supervisor <span className='text-danger'></span>
          </Label>
          <Select
                isClearable={false}
                value={store.supervisorOptions?.find(item => item?.value === data?.supervisor_id)}
                options={store.supervisorOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Supervisor'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'supervisor_id'}})                 
                }}
              />
          {errors?.supervisor_id && <p className="text-danger">{errors?.supervisor_id}</p>}
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='select-status'>
            Select Status <span className='text-danger'>*</span>
          </Label>
          <Select
                isClearable={false}
                value={store.statusOptions?.find(item => item?.value === data?.status)}
                options={store.statusOptions}
                className='react-select'
                classNamePrefix='select'
                placeholder='Select Status'
                onChange={data => {
                  onChangeText({target:{value:data.value, name:'status'}})              
                }}
              />
          {errors?.status && <p className="text-danger">{errors?.status}</p>}
        </div>


<Button
          color="primary"
          className="me-1"
          type="submit"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner className="me-25" size="sm" />
              Please Wait...
            </>
          ) : (
            "Submit"
          )}
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
