import { Form, Button, FormControl } from "react-bootstrap";

export const ReviewForm = () => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
            </Form.Group>
            <Button variant="outline-info">Submit</Button>
        </Form>
    )
}
