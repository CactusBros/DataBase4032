import re

def load_queries(filename):
    queries = {}
    with open(filename, 'r') as f:
        content = f.read()
    
    query_blocks = re.split(r'-- name: (\w+)', content)
    query_blocks = query_blocks[1:]
    
    for i in range(0, len(query_blocks), 2):
        query_name = query_blocks[i].strip()
        query_sql = query_blocks[i+1].strip()
        queries[query_name] = query_sql
            
    return queries
