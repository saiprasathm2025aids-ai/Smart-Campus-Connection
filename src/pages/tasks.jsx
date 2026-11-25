
import { useNavigate } from 'react-router-dom'

function Tasks() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Tasks Page</h1>

            <button onClick={() => navigate('/projects')}>
                Back to Projects
            </button>

        </div>
    )
}

export default Tasks
