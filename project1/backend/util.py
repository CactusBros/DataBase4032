def remove_sql_comments(sql):
    lines = sql.split('\n')
    clean_lines = [line for line in lines if not line.strip().startswith('--')]
    return '\n'.join(clean_lines)

def load_queries(file_path):
    queries = {}

    with open(file_path, 'r') as f:
        content = f.read()

    chunks = content.split('-- name:')
    
    for chunk in chunks[1:]:
        name, sql = chunk.strip().split('\n', 1)
        name = name.strip()
        sql = remove_sql_comments(sql.strip())
        queries[name] = sql.strip()

    return queries
