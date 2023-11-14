import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserType from '../types/auth'


type SignUpProps = {
    logUserIn: (user:Partial<UserType>) =>void
}
    export default function SignUp({ logUserIn }: SignUpProps) {

    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState<Partial<UserType>>(
        {
            firstName: '',
            lastName: '',
            email:'',
            username:'',
            password:'',
            confirmPassword:'',
        }
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>  {
        console.log(e.target.name, e.target.value)
        setUserFormData({...userFormData, [e.target.name] : e.target.value})
    }

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        logUserIn(userFormData)
        navigate('/')
    }

    return (
       <>
            <h1 className="text-center">Sign Up</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control value={userFormData.firstName} name='firstName' onChange={handleInputChange} />

                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control value={userFormData.lastName} name='lastName'/>

                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control value={userFormData.email} name='email' onChange={handleInputChange}/>

                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control value={userFormData.username} name='username' onChange={handleInputChange}/>

                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control value={userFormData.password} name='password' onChange={handleInputChange}/>

                        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                        <Form.Control value={userFormData.confirmPassword} name='confirmPass' onChange={handleInputChange}/>
                        <Button type="submit" variant="outline-success" className="w-100 mt-3">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>

       </>
    )
}